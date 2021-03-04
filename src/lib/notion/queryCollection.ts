import { BLOG_TIMEZONE } from "../../constants/blog";
import { notionApiClient } from "./openApi";
import {
  QueryCollectionLoader,
  QueryCollectionLoaderTypeEnum,
  QueryCollectionQuery,
  QueryCollectionQuerySortDirectionEnum,
} from "./openApi/generated";

type Args = {
  collectionId: string;
  collectionViewId: string;
  loader?: Partial<QueryCollectionLoader>;
  query?: Partial<QueryCollectionQuery>;
};

export const queryCollection = ({
  collectionId,
  collectionViewId,
  loader = {},
  query = {},
}: Args) => {
  const {
    limit = 999, // TODO: figure out Notion's way of handling pagination
    loadContentCover = true,
    type = QueryCollectionLoaderTypeEnum.Table,
    userTimeZone = BLOG_TIMEZONE,
  } = loader;

  const {
    aggregations = [
      {
        aggregator: "count",
        property: "title",
      },
    ],
    sort = [
      {
        property: "date",
        direction: QueryCollectionQuerySortDirectionEnum.Descending,
      },
    ],
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
};
