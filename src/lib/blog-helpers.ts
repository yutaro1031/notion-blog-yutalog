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

export const normalizeSlug = (slug: any): string => {
  if (typeof slug !== "string") return slug;

  const startingSlash = slug.startsWith("/");
  const endingSlash = slug.endsWith("/");

  if (startingSlash) {
    slug = slug.substr(1);
  }
  if (endingSlash) {
    slug = slug.substr(0, slug.length - 1);
  }
  return startingSlash || endingSlash ? normalizeSlug(slug) : slug;
};
