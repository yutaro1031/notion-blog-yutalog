import { notionApiClient } from "./openApi";

export const getNotionAssetUrls = async (
  assetUrl: string,
  blockId: string
): Promise<string[]> => {
  const assetRes = await notionApiClient.getSignedFileUrls({
    urls: [
      {
        url: assetUrl,
        permissionRecord: {
          table: "block",
          id: blockId,
        },
      },
    ],
  });

  return assetRes.data.signedUrls;
};
