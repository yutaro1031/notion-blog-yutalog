import { GetServerSideProps } from "next";
import { generateFeedXml } from "../lib/rss";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const xml = await generateFeedXml();

  res.statusCode = 200;
  // MEMO: Cache for 24 hours.
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.setHeader("Content-Type", "text/xml");
  res.end(xml);

  return {
    props: {},
  };
};

const Page = () => null;
export default Page;
