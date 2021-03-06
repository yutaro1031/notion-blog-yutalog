import RSS from "rss";
import { postIsPublished, getBlogLink } from "./blog";
import {
  BLOG_DESCRIPTION,
  BLOG_TITLE,
  BLOG_URL,
  BLOG_RSS_FEED_URL,
  BLOG_LANGUAGE,
} from "../constants/blog";
import { getBlogIndex } from "./notion/getBlogIndex";

export const generateFeedXml = async () => {
  const feed = new RSS({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    site_url: BLOG_URL,
    feed_url: BLOG_RSS_FEED_URL,
    language: BLOG_LANGUAGE,
  });

  const postsTable = await getBlogIndex();
  const blogPosts = Object.values(postsTable).filter((post) =>
    postIsPublished(post)
  );

  for (const post of blogPosts) {
    feed.item({
      title: post.Page,
      description: post.Description,
      date: `${post.Date}`,
      url: getBlogLink(post.Slug),
    });
  }

  return feed.xml();
};
