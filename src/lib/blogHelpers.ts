export const getBlogLink = (slug: string) => {
  return `/blog/${slug}`;
};

export const getDateStr = (date: number | string | Date) => {
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};

export const postIsPublished = (post: any) => {
  return post.Published === "Yes";
};
