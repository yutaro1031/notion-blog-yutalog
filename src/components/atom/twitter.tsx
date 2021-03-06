import { FC, useEffect } from "react";

export const TwitterScript = () => (
  <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
);

interface TwitterCardProps {
  src: string;
}

export const TwitterCard: FC<TwitterCardProps> = ({ src }) => {
  useEffect(() => {
    window.twttr.widgets.load();
  }, []);
  return (
    <blockquote className="twitter-tweet tw-align-center">
      <a href={src}></a>
    </blockquote>
  );
};
