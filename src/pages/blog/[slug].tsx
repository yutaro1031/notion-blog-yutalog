/* eslint-disable no-case-declarations */
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../../components/atom/header";
import { ParsedUrlQuery } from "querystring";
import blogStyles from "../../styles/blog.module.css";
import { TextBlock } from "../../lib/notion/renderers/textBlock";
import { getBlogLink, getDateStr, postIsPublished } from "../../lib/blog";
import { getPageData } from "../../lib/notion/getPageData";
import { getNotionUsers } from "../../lib/notion/getNotionUsers";
import { getBlogIndex } from "../../lib/notion/getBlogIndex";
import { ArticleTableRow, PageBlock } from "../../lib/notion/types";
import { TwitterCard } from "../../components/atom/twitter";
import { Fallback } from "../../components/atom/fallback";
import { NotFound } from "../../components/atom/notFound";
import { PreviewAlert } from "../../components/atom/previewAlert";
import { Bullet } from "../../lib/notion/renderers/bullet";
import { ArticleHead } from "../../lib/notion/renderers/articleHead";
import { Image } from "../../components/atom/image";
import { YoutubeIframe } from "../../components/atom/youtubeIframe";
import { Callout } from "../../components/atom/callout";
import Code from "../../components/atom/code";

interface Props {
  preview: boolean;
  post?: {
    meta: ArticleTableRow;
    content: PageBlock[];
    authors: string[];
  };
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
  preview,
}) => {
  const slug = params?.slug || "";
  const postsTable = await getBlogIndex();
  const postMeta = postsTable[slug];

  if (!postMeta || (!postIsPublished(postMeta) && !preview)) {
    console.log(`Failed to find post for slug: ${slug}`);
    return {
      props: { preview: false },
      revalidate: 5,
    };
  }
  const { blocks } = await getPageData(postMeta.id);
  const { users } = await getNotionUsers(postMeta.Authors);
  const authors = Object.values(users).map((user) => user.full_name);

  return {
    props: {
      post: {
        meta: postMeta,
        content: blocks as PageBlock[],
        authors,
      },
      preview: !!preview,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsTable = await getBlogIndex();
  // we fallback for any unpublished posts to save build time
  // for actually published ones
  return {
    paths: Object.values(postsTable)
      .filter((post) => postIsPublished(post))
      .map((post) => getBlogLink(post.Slug)),
    fallback: true,
  };
};

const RenderPost: NextPage<Props> = ({ post, preview }) => {
  const router = useRouter();
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) return <Fallback />;

  // if you don't have a post at this point, and are not
  // loading one from fallback then redirect back to the index
  if (!post || !post.meta || !post.content) return <NotFound />;

  return (
    <>
      <Header titlePre={post.meta.Page} />
      {preview && <PreviewAlert />}
      <div className={blogStyles.post}>
        <h1>{post.meta.Page}</h1>
        {post.authors.length > 0 && (
          <div className="authors">By: {post.authors.join(" ")}</div>
        )}
        {post.meta.Date && (
          <div className="posted">Posted: {getDateStr(post.meta.Date)}</div>
        )}

        <hr />

        {post.content.map((block, blockIdx) => {
          const { value } = block;
          const { type, properties, id } = block.value;
          switch (type) {
            case "page":
            case "divider":
            case "text":
              if (properties) {
                return (
                  <p key={id}>
                    <TextBlock title={properties.title} />
                  </p>
                );
              }
              break;
            case "image":
              return (
                <Image
                  key={id}
                  src={`/api/asset?assetUrl=${encodeURIComponent(
                    value.format.display_source
                  )}&blockId=${id}`}
                  alt={`An image from Notion`}
                  width={value.format.block_width}
                  height={value.format.block_height}
                />
              );
            case "video": // MEMO: Only for Youtube embedded
              return (
                <YoutubeIframe key={id} src={value.format.display_source} />
              );
            case "header":
            case "sub_header":
            case "sub_sub_header":
              return (
                <ArticleHead key={id} type={type}>
                  <TextBlock title={properties.title} />
                </ArticleHead>
              );
            case "code":
              return (
                <Code key={id} language={properties.language[0][0] as string}>
                  {properties.title[0][0] as string}
                </Code>
              );
            case "quote":
              if (properties.title) {
                return <blockquote key={id}>{properties.title}</blockquote>;
              }
              break;
            case "callout":
              return (
                <Callout key={id} icon={value.format.page_icon}>
                  {<TextBlock title={properties.title} />}
                </Callout>
              );
            case "tweet":
              return <TwitterCard key={id} src={properties.source as any} />;
            case "numbered_list":
            case "bulleted_list":
              // MEMO: Break if previous block is list
              if (post.content[blockIdx - 1]?.value?.type === type) break;
              const afterListIndex = post.content.findIndex(
                (block, index) => index > blockIdx && block.value?.type !== type
              );
              return (
                <Bullet
                  key={id}
                  type={type}
                  blocks={post.content.slice(
                    blockIdx,
                    afterListIndex === -1 ? undefined : afterListIndex
                  )}
                />
              );
            default:
              if (process.env.NODE_ENV !== "production") {
                console.warn("unknown block value type", type);
              }
          }
          return null;
        })}
      </div>
    </>
  );
};

export default RenderPost;
