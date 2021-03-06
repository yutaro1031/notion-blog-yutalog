import { useRouter } from "next/router";
import { FC, useEffect } from "react";

/**
 * Represent the notfound state & redirect to top page.
 */
export const NotFound: FC = () => {
  const router = useRouter();
  useEffect(() => {
    // TODO: Redirect after a few seconds.
    router.replace("/");
  }, [router]);
  return (
    <div>
      <p>
        Woops! didn&apos;t find that post, redirecting you back to the blog
        index
      </p>
    </div>
  );
};
