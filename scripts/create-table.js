// commonjs so it can be run without transpiling
const { v4: uuid } = require("uuid");
const axiosBase = require("axios");
const {
  NOTION_BLOG_INDEX_ID: pageId,
  NOTION_TOKEN,
  NOTION_API_ENDPOINT,
} = require("../src/constants/notion");

const axios = axiosBase.create({
  baseURL: NOTION_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    cookie: `token_v2=${NOTION_TOKEN}`,
  },
  responseType: "json",
});

async function main() {
  const userId = await getUserId();
  const transactionId = () => uuid();
  const collectionId = uuid();
  const collectionViewId = uuid();
  const viewId = uuid();
  const now = Date.now();
  const pageId1 = uuid();
  const pageId2 = uuid();
  const pageId3 = uuid();
  const existingBlockId = await getExistingexistingBlockId();

  const requestBody = {
    requestId: uuid(),
    transactions: [
      {
        id: transactionId(),
        operations: [
          {
            id: collectionId,
            table: "block",
            path: [],
            command: "update",
            args: {
              id: collectionId,
              type: "collection_view",
              collection_id: collectionViewId,
              view_ids: [viewId],
              properties: {},
              created_time: now,
              last_edited_time: now,
            },
          },
          {
            id: pageId1,
            table: "block",
            path: [],
            command: "update",
            args: {
              id: pageId1,
              type: "page",
              parent_id: collectionViewId,
              parent_table: "collection",
              alive: true,
              properties: {},
              created_time: now,
              last_edited_time: now,
            },
          },
          {
            id: pageId2,
            table: "block",
            path: [],
            command: "update",
            args: {
              id: pageId2,
              type: "page",
              parent_id: collectionViewId,
              parent_table: "collection",
              alive: true,
              properties: {},
              created_time: now,
              last_edited_time: now,
            },
          },
          {
            id: pageId3,
            table: "block",
            path: [],
            command: "update",
            args: {
              id: pageId3,
              type: "page",
              parent_id: collectionViewId,
              parent_table: "collection",
              alive: true,
              properties: {},
              created_time: now,
              last_edited_time: now,
            },
          },
          {
            id: viewId,
            table: "collection_view",
            path: [],
            command: "update",
            args: {
              id: viewId,
              version: 0,
              type: "table",
              name: "Default View",
              format: {
                table_properties: [
                  { property: "title", visible: true, width: 276 },
                  { property: "description", visible: true },
                  { property: "slug", visible: true },
                  { property: "published", visible: true },
                  { property: "date", visible: true },
                  { property: "authors", visible: true },
                ],
                table_wrap: true,
              },
              query2: {
                aggregations: [{ property: "title", aggregator: "count" }],
              },
              page_sort: [pageId1, pageId2, pageId3],
              parent_id: collectionId,
              parent_table: "block",
              alive: true,
            },
          },
          {
            id: collectionViewId,
            table: "collection",
            path: [],
            command: "update",
            args: {
              id: collectionViewId,
              schema: {
                title: { name: "Page", type: "title" },
                description: { name: "Description", type: "text" },
                slug: { name: "Slug", type: "text" },
                published: { name: "Published", type: "checkbox" },
                date: { name: "Date", type: "date" },
                authors: { name: "Authors", type: "person" },
              },
              format: {
                collection_page_properties: [
                  { property: "description", visible: true },
                  { property: "slug", visible: true },
                  { property: "published", visible: true },
                  { property: "date", visible: true },
                  { property: "authors", visible: true },
                ],
              },
              parent_id: collectionId,
              parent_table: "block",
              alive: true,
            },
          },
          {
            id: collectionId,
            table: "block",
            path: [],
            command: "update",
            args: { parent_id: pageId, parent_table: "block", alive: true },
          },
          {
            table: "block",
            id: pageId,
            path: ["content"],
            command: "listAfter",
            args: {
              ...(existingBlockId
                ? {
                    after: existingBlockId,
                  }
                : {}),
              id: collectionId,
            },
          },
          {
            table: "block",
            id: collectionId,
            path: ["created_by_id"],
            command: "set",
            args: userId,
          },
          {
            table: "block",
            id: collectionId,
            path: ["created_by_table"],
            command: "set",
            args: "notion_user",
          },
          {
            table: "block",
            id: collectionId,
            path: ["last_edited_time"],
            command: "set",
            args: now,
          },
          {
            table: "block",
            id: collectionId,
            path: ["last_edited_by_id"],
            command: "set",
            args: userId,
          },
          {
            table: "block",
            id: collectionId,
            path: ["last_edited_by_table"],
            command: "set",
            args: "notion_user",
          },
          {
            table: "block",
            id: pageId1,
            path: ["created_by_id"],
            command: "set",
            args: userId,
          },
          {
            table: "block",
            id: pageId1,
            path: ["created_by_table"],
            command: "set",
            args: "notion_user",
          },
          {
            table: "block",
            id: pageId1,
            path: ["last_edited_time"],
            command: "set",
            args: now,
          },
          {
            table: "block",
            id: pageId1,
            path: ["last_edited_by_id"],
            command: "set",
            args: userId,
          },
          {
            table: "block",
            id: pageId1,
            path: ["last_edited_by_table"],
            command: "set",
            args: "notion_user",
          },
          {
            table: "block",
            id: pageId2,
            path: ["created_by_id"],
            command: "set",
            args: userId,
          },
          {
            table: "block",
            id: pageId2,
            path: ["created_by_table"],
            command: "set",
            args: "notion_user",
          },
          {
            table: "block",
            id: pageId2,
            path: ["last_edited_time"],
            command: "set",
            args: now,
          },
          {
            table: "block",
            id: pageId2,
            path: ["last_edited_by_id"],
            command: "set",
            args: userId,
          },
          {
            table: "block",
            id: pageId2,
            path: ["last_edited_by_table"],
            command: "set",
            args: "notion_user",
          },
          {
            table: "block",
            id: pageId3,
            path: ["created_by_id"],
            command: "set",
            args: userId,
          },
          {
            table: "block",
            id: pageId3,
            path: ["created_by_table"],
            command: "set",
            args: "notion_user",
          },
          {
            table: "block",
            id: pageId3,
            path: ["last_edited_time"],
            command: "set",
            args: now,
          },
          {
            table: "block",
            id: pageId3,
            path: ["last_edited_by_id"],
            command: "set",
            args: userId,
          },
          {
            table: "block",
            id: pageId3,
            path: ["last_edited_by_table"],
            command: "set",
            args: "notion_user",
          },
        ],
      },
    ],
  };

  const { status } = await axios.post(`/submitTransaction`, requestBody);

  if (status !== 200) {
    throw new Error(`Failed to add table, request status ${status}`);
  }
}

async function getExistingexistingBlockId() {
  const { status, data } = await axios.post(`/loadPageChunk`, {
    pageId,
    limit: 25,
    cursor: { stack: [] },
    chunkNumber: 0,
    verticalColumns: false,
  });

  if (status !== 200) {
    throw new Error(
      `failed to get existing block id, request status: ${status}`
    );
  }
  const id = Object.keys(data ? data.recordMap.block : {}).find(
    (id) => id !== pageId
  );
  return id || uuid();
}

async function getUserId() {
  const { status, data } = await axios.post(`/loadUserContent`, {});

  if (status !== 200) {
    throw new Error(`failed to get Notion user id, request status: ${status}`);
  }
  return Object.keys(data.recordMap.notion_user)[0];
}

main();
