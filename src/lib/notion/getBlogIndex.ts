import { Sema } from "async-sema";
import rpc, { values } from "./rpc";
import getTableData from "./getTableData";
import { getPostPreview } from "./getPostPreview";
import { readFile, writeFile } from "../fs-helpers";
import { BLOG_INDEX_ID, BLOG_INDEX_CACHE } from "../../constants/notion";

export default async function getBlogIndex(
  previews = true
): Promise<{ [key in string]: any }> {
  let postsTable: any = null;
  const useCache = process.env.USE_CACHE === "true";
  const cacheFile = `${BLOG_INDEX_CACHE}${previews ? "_previews" : ""}`;

  if (useCache) {
    try {
      postsTable = JSON.parse(await readFile(cacheFile, "utf8"));
    } catch (_) {
      /* not fatal */
    }
  }

  if (!postsTable) {
    try {
      const data = await rpc("loadPageChunk", {
        pageId: BLOG_INDEX_ID,
        limit: 999, // TODO: figure out Notion's way of handling pagination
        cursor: { stack: [] },
        chunkNumber: 0,
        verticalColumns: false,
      });

      // Parse table with posts
      const tableBlock = values(data.recordMap.block).find(
        (block: any) => block.value.type === "collection_view"
      );

      postsTable = await getTableData(tableBlock, true);
    } catch (err) {
      console.warn(
        `Failed to load Notion posts. Did you run "$ NOTION_TOKEN='token' BLOG_INDEX_ID='new-page-id' node scripts/create-table.js"?`
      );
      return {};
    }

    // only get 10 most recent post's previews
    const postsKeys = Object.keys(postsTable).splice(0, 10);

    const sema = new Sema(3, { capacity: postsKeys.length });

    if (previews) {
      await Promise.all(
        postsKeys
          .sort((a, b) => {
            const postA = postsTable[a];
            const postB = postsTable[b];
            const timeA = postA.Date;
            const timeB = postB.Date;
            return Math.sign(timeB - timeA);
          })
          .map(async (postKey) => {
            await sema.acquire();
            const post = postsTable[postKey];
            post.preview = post.id
              ? await getPostPreview(postsTable[postKey].id)
              : [];
            sema.release();
          })
      );
    }

    if (useCache) {
      writeFile(cacheFile, JSON.stringify(postsTable), "utf8").catch(() => {});
    }
  }

  return postsTable;
}
