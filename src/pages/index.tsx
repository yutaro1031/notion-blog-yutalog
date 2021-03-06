import Header from "../components/atom/header";
import ExtLink from "../components/atom/ext-link";
import sharedStyles from "../styles/shared.module.css";

const IndexPage = () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/vercel-and-notion.png"
        height="85"
        width="250"
        alt="Vercel + Notion"
      />
      <h1>My Notion Blog</h1>
      <h2>
        Blazing Fast Notion Blog with Next.js&apos;{" "}
        <ExtLink
          href="https://github.com/vercel/next.js/issues/9524"
          className="dotted"
          style={{ color: "inherit" }}
        >
          SSG
        </ExtLink>
      </h2>

      <div className="explanation">
        <p>
          This is a statically generated{" "}
          <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a{" "}
          <ExtLink href="https://notion.so">Notion</ExtLink> powered blog that
          is deployed with <ExtLink href="https://vercel.com">Vercel</ExtLink>.
          It leverages some upcoming features in Next.js like{" "}
          <ExtLink href="https://github.com/vercel/next.js/issues/9524">
            SSG support
          </ExtLink>{" "}
          and{" "}
          <ExtLink href="https://github.com/vercel/next.js/issues/8626">
            built-in CSS support
          </ExtLink>{" "}
          which allow us to achieve all of the benefits listed above including
          blazing fast speeds, great local editing experience, and always being
          available!
        </p>

        <p>
          Get started by creating a new page in Notion and clicking the deploy
          button below. After you supply your token and the blog index id (the
          page&apos;s id in Notion) we will automatically create the table for
          you! See{" "}
          <ExtLink href="https://github.com/ijjk/notion-blog#getting-blog-index-and-token">
            here in the readme
          </ExtLink>{" "}
          for finding the new page&apos;s id. To get your token from Notion,
          login and look for a cookie under www.notion.so with the name
          `token_v2`. After finding your token and your blog&apos;s page id you
          should be good to go!
        </p>
      </div>
    </div>
  </>
);

export default IndexPage;
