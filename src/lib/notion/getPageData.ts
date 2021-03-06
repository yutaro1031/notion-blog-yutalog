import { notionApiClient } from "./openApi";

export const getPageData = async (pageId: string) => {
  try {
    const { data } = await notionApiClient.loadPageChunk({
      pageId,
      limit: 100,
      cursor: { stack: [] },
      chunkNumber: 0,
      verticalColumns: false,
    });
    const blocks = Object.values(data.recordMap.block);

    if (blocks[0] && blocks[0].value.content) {
      // remove table blocks
      blocks.splice(0, 3);
    }

    return { blocks };
  } catch (err) {
    console.error(`Failed to load pageData for ${pageId}`, err);
    return { blocks: [] };
  }
};
