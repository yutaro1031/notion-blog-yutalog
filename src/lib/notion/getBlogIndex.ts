import { NOTION_BLOG_INDEX_ID } from "../../constants/notion";
import { notionApiClient } from "./openApi";
import { getArticleTableData } from "./getArticleTableData";
import { ArticleTable } from "./types";

export const getBlogIndex = async (): Promise<ArticleTable> => {
  let postsTable: ArticleTable = {};
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
  return postsTable;
};
