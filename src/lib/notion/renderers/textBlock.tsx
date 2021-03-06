import { ElementType, FC, Fragment } from "react";
import { PropertyValue } from "../types";

interface TextBlockProps {
  title: PropertyValue;
  component?: ElementType;
}

export const TextBlock: FC<TextBlockProps> = ({ title, component }) => {
  const Component = component || Fragment;
  return (
    <Component>
      {title.map((item, index) =>
        item.length === 1 ? (
          item
        ) : (
          <Tag
            key={index}
            info={(Array.isArray(item[1][0]) ? item[1][0] : item[1]) as any}
          >
            {item[0] as string}
          </Tag>
        )
      )}
    </Component>
  );
};

interface TagProps {
  info: [string, string];
  children: string;
}

const Tag: FC<TagProps> = ({ info, children }) => {
  const [type, arg] = info;
  switch (type) {
    case "p":
      return <Fragment>{children}</Fragment>;
    case "b":
      return <b>{children}</b>;
    case "c":
      return <code>{children}</code>;
    case "_":
      return <span className="underline">{children}</span>;
    case "a":
      return <a href={arg}>{children}</a>;
    default:
      console.warn(`unknown tag type ${type}`);
      return null;
  }
};
