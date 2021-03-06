import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Header from "../../components/atom/header";

import blogStyles from "../../styles/blog.module.css";
import sharedStyles from "../../styles/shared.module.css";

import { getBlogLink, getDateStr, postIsPublished } from "../../lib/blog";
import { getNotionUsers } from "../../lib/notion/getNotionUsers";
import { getBlogIndex } from "../../lib/notion/getBlogIndex";
import { PreviewAlert } from "../../components/atom/previewAlert";
import { ArticleTableRow } from "../../lib/notion/types";

interface Props {
  preview: boolean;
  posts?: {
    meta: ArticleTableRow;
    authors: string[];
  }[];
}

export const getStaticProps: GetStaticProps<Props> = async ({ preview }) => {
  const postsTable = await getBlogIndex();

  const authorsToGet: Set<string> = new Set();
  const postMetas = Object.values(postsTable).filter((post) => {
    for (const author of post.Authors) {
      authorsToGet.add(author);
    }
    return preview || postIsPublished(post);
  });

  const { users } = await getNotionUsers([...authorsToGet]);

  const posts = postMetas.map((meta) => ({
    meta,
    authors: meta.Authors.map((id: any) => users[id].full_name),
  }));
  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  };
};

const BlogIndex: NextPage<Props> = ({ posts = [], preview }) => {
  return (
    <>
      <Header titlePre="Blog" />
      {preview && <PreviewAlert />}
      <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
        <h1>My Notion Blog</h1>
        {posts.length === 0 && (
          <p className={blogStyles.noPosts}>There are no posts yet</p>
        )}
        {posts.map((post) => {
          return (
            <div className={blogStyles.postPreview} key={post.meta.Slug}>
              <h3>
                <Link href="/blog/[slug]" as={getBlogLink(post.meta.Slug)}>
                  <div className={blogStyles.titleContainer}>
                    {!post.meta.Published && (
                      <span className={blogStyles.draftBadge}>Draft</span>
                    )}
                    <a>{post.meta.Page}</a>
                  </div>
                </Link>
              </h3>
              {post.authors.length > 0 && (
                <div className="authors">By: {post.authors.join(" ")}</div>
              )}
              {post.meta.Date && (
                <div className="posted">
                  Posted: {getDateStr(post.meta.Date)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogIndex;
