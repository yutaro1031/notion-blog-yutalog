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
  return request;
});
axiosInstance.interceptors.response.use((response) => {
  // if (process.env.NODE_ENV === "development") {
  //   console.log("Response: ", response);
  // }
  return response;
});

/**
 * HTTP client for Notion API.
 */
export const notionApiClient: DefaultApi = new DefaultApi(
  undefined,
  undefined,
  axiosInstance
);
