import { readFile, writeFile } from "../fs";
import {
  NOTION_BLOG_INDEX_ID,
  NOTION_BLOG_INDEX_CACHE,
} from "../../constants/notion";
import { notionApiClient } from "./openApi";
import { getArticleTableData } from "./getArticleTableData";
import { ArticleTable } from "./types";

export const getBlogIndex = async (): Promise<ArticleTable> => {
  let postsTable: ArticleTable = {};
  const useCache = process.env.USE_CACHE === "true";
  if (useCache) {
    try {
      postsTable = JSON.parse(await readFile(NOTION_BLOG_INDEX_CACHE, "utf8"));
    } catch (_) {
      /* not fatal */
    }
  }

  if (Object.keys(postsTable).length === 0) {
    try {
      const { data } = await notionApiClient.loadPageChunk({
        pageId: NOTION_BLOG_INDEX_ID,
        limit: 100, // TODO: figure out Notion's way of handling pagination
        cursor: { stack: [] },
        chunkNumber: 0,
        verticalColumns: false,
      });

      // Parse table with posts
      const tableBlock = Object.values(data.recordMap.block).find(
        (block) => block.value.type === "collection_view"
      );
      if (!tableBlock) return {};

      postsTable = await getArticleTableData(tableBlock);
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
};
