import { FC } from "react";

const collectText = (el: any, acc = [] as any) => {
  if (el) {
    if (typeof el === "string") acc.push(el);
    if (Array.isArray(el)) el.map((item) => collectText(item, acc));
    if (typeof el === "object") collectText(el.props && el.props.children, acc);
  }
  return acc.join("").trim();
};

interface Props {
  children: any;
  id?: any;
}

const Heading: FC<Props> = ({ children, id }) => {
  const text = children.props.children || "";

  // eslint-disable-next-line eqeqeq
  if (null == id) {
    id = collectText(text)
      .toLowerCase()
      .replace(/\s/g, "-")
      .replace(/[?!:]/g, "");
  }

  return (
    <a href={`#${id}`} id={id} style={{ color: "inherit" }}>
      {children}
    </a>
  );
};

export default Heading;
