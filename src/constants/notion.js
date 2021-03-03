// use commonjs so it can be required without transpiling
const path = require("path");

const normalizeId = (id) => {
  if (!id) return id;
  if (id.length === 36) return id;
  if (id.length !== 32) {
    throw new Error(
      `Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`
    );
  }
  return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(
    16,
    4
  )}-${id.substr(20)}`;
};

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_BLOG_INDEX_ID = normalizeId(process.env.NOTION_BLOG_INDEX_ID);
const NOTION_API_ENDPOINT = "https://www.notion.so/api/v3";
const NOTION_BLOG_INDEX_CACHE = path.resolve(".blog_index_data");

module.exports = {
  NOTION_TOKEN,
  NOTION_BLOG_INDEX_ID,
  NOTION_API_ENDPOINT,
  NOTION_BLOG_INDEX_CACHE,
};
