import { Value } from "./openApi/generated";
export interface ArticleTable {
  [slug: string]: ArticleTableRow;
}

export interface ArticleTableRow {
  [property: string]: any;

  id: string;
  // MEMO: Columns defined in Notion
  Slug: string;
  Date: number;
  Authors: string[];
  Published: "Yes" | "No";
  Description: string;
  Page: string;
}

/**
 * Supplement for complicated "Value" type
 */
export interface TableBlockValue extends Value {
  properties: {
    // e.g. [["‣", [["u", "h31k2h-k4h1j2-123-844c-alje23lj4nk"]]]]
    //      [["‣", [["d", {type: "date", start_date: "2021-03-03"}]]]]
    [property: string]: Array<Array<string | Array<Array<any>>>>;
  };
}
