import { NextApiResponse } from "next";
import { notionApiClient } from "./openApi";

export default async function getNotionAsset(
  res: NextApiResponse,
  assetUrl: string,
  blockId: string
): Promise<{
  signedUrls: string[];
}> {
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

  if (assetRes.status === 200) {
    return assetRes.data;
  } else {
    console.log("bad request", assetRes.status);
    res.json({ status: "error", message: "failed to load Notion asset" });
    throw new Error(
      `Notion API error (${assetRes.status})\n${JSON.stringify(
        assetRes.headers
      )}\n${JSON.stringify(assetRes.data)}`
    );
  }
}
