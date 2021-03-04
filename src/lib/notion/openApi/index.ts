import axios from "axios";
import { DefaultApi } from "./generated";
import { NOTION_TOKEN } from "../../../constants/notion";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Cookie: `token_v2=${NOTION_TOKEN}`,
  },
});

axiosInstance.interceptors.request.use((request) => {
  // if (process.env.NODE_ENV === "development") {
  //   console.log("Starting Request: ", request);
  // }
  // MEMO: Node only for not leak token.
  if (typeof window === "undefined") {
    return request;
  } else {
    throw new Error("This instance is for server environment");
  }
});
axiosInstance.interceptors.response.use((response) => {
  if (response.status !== 200) {
    throw new Error(
      `Notion API error (${response.status})\n${JSON.stringify(
        response.headers
      )}\n${JSON.stringify(response.data)}`
    );
  }
  // if (process.env.NODE_ENV === "development") {
  //   console.log("Response: ", response);
  // }
  return response;
});

/**
 * HTTP client for Notion API.
 * CAUTION: Please use in node environment for not leak token.
 */
export const notionApiClient: DefaultApi = new DefaultApi(
  undefined,
  undefined,
  axiosInstance
);
