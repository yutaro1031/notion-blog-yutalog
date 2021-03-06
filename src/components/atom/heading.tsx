import { FC } from "react";

interface Props {
  as: "h1" | "h2" | "h3";
}

export const Heading: FC<Props> = ({ as, children }) => {
  const Component = as;
  return <Component>{children}</Component>;
};
