import { Block } from "./openApi/generated";
import { queryCollection } from "./queryCollection";
import { ArticleTable, TableBlockValue, ArticleTableRow } from "./types";

export const getArticleTableData = async (
  tableBlock: Block
): Promise<ArticleTable> => {
  const table: ArticleTable = {};

  const { value } = tableBlock;
  const { data: col } = await queryCollection({
    collectionId: value.collection_id as string,
    collectionViewId: value.view_ids[0],
  });

  const collectionId = Object.keys(col.recordMap.collection)[0];
  const schema = col.recordMap.collection[collectionId].value.schema;
  if (!schema) return {};
  const schemaKeys = Object.keys(schema);

  const entries = Object.values(col.recordMap.block).filter(
    (block) => block.value.parent_id === value.collection_id
  );
  for (const entry of entries) {
    if (!entry.value.properties) continue;
    const row = {} as ArticleTableRow;
    row.id = entry.value.id;
    for (const key of schemaKeys) {
      const property = (entry.value as TableBlockValue).properties[key];
      let val = property ? getValueFromProperty(property) : null;
      if (typeof val === "string") val = val.trim();
      row[schema[key].name] = val;
    }
    if (row.Slug) table[row.Slug] = row;
  }
  return table;
};

const getValueFromProperty = (
  property: TableBlockValue["properties"][keyof TableBlockValue["properties"]]
): any => {
  // e.g. property = [["test"]]
  if (property && property[0][0] && !property[0][1]) return property[0][0];

  // authors and blocks are centralized
  // e.g. property = [["‣", [["d", {type: "date", start_date: "2021-03-03"}]]]]
  const type = property[0][1][0];
  switch (type[0]) {
    case "a": // link
      return type[1];
    case "u": // user
      return property
        .filter((arr: any[]) => arr.length > 1)
        .map((arr: any[]) => arr[1][0][1]);
    case "d": // date
      if (!type[1].start_date) return null;
      return new Date(type[1].start_date).getTime();
    default:
      console.error("unknown type", type[0], type);
      return null;
  }
};
