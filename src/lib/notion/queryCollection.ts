import { notionApiClient } from "./openApi";

export default function queryCollection({
  collectionId,
  collectionViewId,
  loader = {},
  query = {},
}: any) {
  const {
    limit = 999, // TODO: figure out Notion's way of handling pagination
    loadContentCover = true,
    type = "table",
    userTimeZone = "America/Phoenix",
  } = loader;

  const {
    aggregations = [
      {
        aggregator: "count",
        property: "title",
      },
    ],
    sort = [],
  } = query;

  return notionApiClient.queryCollection({
    collectionId,
    collectionViewId,
    loader: {
      limit,
      loadContentCover,
      type,
      userTimeZone,
    },
    query: {
      aggregations,
      sort,
    },
  });
}
