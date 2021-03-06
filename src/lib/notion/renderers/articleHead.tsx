import { FC } from "react";
import { Heading } from "../../../components/atom/heading";
import { ValueTypeEnum } from "../openApi/generated";

type HeadingType =
  | ValueTypeEnum.Header
  | ValueTypeEnum.SubHeader
  | ValueTypeEnum.SubSubHeader;

const headerComponentMap: { [type in HeadingType]: "h1" | "h2" | "h3" } = {
  header: "h1",
  sub_header: "h2",
  sub_sub_header: "h3",
};

const collectText = (el: any, acc = [] as any) => {
  if (el) {
    if (typeof el === "string") acc.push(el);
    if (Array.isArray(el)) el.map((item) => collectText(item, acc));
    if (typeof el === "object") collectText(el.props && el.props.children, acc);
  }
  return acc.join("").trim();
};

interface Props {
  type: HeadingType;
  children: any;
}

export const ArticleHead: FC<Props> = ({ type, children }) => {
  const text = collectText(children?.props?.children || "")
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[?!:]/g, "");
  return (
    <a href={`#${text}`} id={text} style={{ color: "inherit" }}>
      <Heading as={headerComponentMap[type]}>{children}</Heading>
    </a>
  );
};
