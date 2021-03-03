import { values } from "./rpc";
import getTableData from "./getTableData";
import { readFile, writeFile } from "../fs-helpers";
import {
  NOTION_BLOG_INDEX_ID,
  NOTION_BLOG_INDEX_CACHE,
} from "../../constants/notion";
import { notionApiClient } from "./openApi";

export default async function getBlogIndex(): Promise<
  { [key in string]: any }
> {
  let postsTable: any = null;
  const useCache = process.env.USE_CACHE === "true";

  if (useCache) {
    try {
      postsTable = JSON.parse(await readFile(NOTION_BLOG_INDEX_CACHE, "utf8"));
    } catch (_) {
      /* not fatal */
    }
  }

  if (!postsTable) {
    try {
      const { data } = await notionApiClient.loadPageChunk({
        pageId: NOTION_BLOG_INDEX_ID,
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
        `Failed to load Notion posts. Did you run "$ NOTION_TOKEN='token' NOTION_BLOG_INDEX_ID='new-page-id' node scripts/create-table.js"?`
      );
      return {};
    }

    if (useCache) {
      writeFile(
        NOTION_BLOG_INDEX_CACHE,
        JSON.stringify(postsTable),
        "utf8"
      ).catch(() => {});
    }
  }

  return postsTable;
}
