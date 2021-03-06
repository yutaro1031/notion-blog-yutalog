import { FC } from "react";
import { PageBlock } from "../types";
import { TextBlock } from "./textBlock";
import { ValueTypeEnum } from "../openApi/generated";

interface Props {
  blocks: PageBlock[];
  type: ValueTypeEnum.NumberedList | ValueTypeEnum.BulletedList;
}

export const Bullet: FC<Props> = ({ blocks, type }) => {
  const listMap: {
    [id: string]: {
      key: string;
      isTop?: boolean;
      nested: string[];
      children: React.ReactFragment;
    };
  } = {};

  const ParentList = type === "bulleted_list" ? "ul" : "ol";

  for (const block of blocks) {
    const { value } = block;
    const { id, properties, parent_id } = value;
    listMap[id] = {
      key: id,
      nested: [],
      children: <TextBlock title={properties.title} />,
    };
    if (listMap[parent_id]) {
      listMap[parent_id].nested.push(id);
    } else {
      listMap[id].isTop = true;
    }
  }

  const NestedList = ({ item }: any) => (
    <li>
      {item.children}
      {item.nested.length > 0 && (
        <ParentList>
          {item.nested.map((nestedId: any) => (
            <NestedList key={nestedId} item={listMap[nestedId]} />
          ))}
        </ParentList>
      )}
    </li>
  );

  return (
    <ParentList key={`list${blocks[0].value.id}`}>
      {Object.values(listMap).map(
        (item) => item.isTop && <NestedList key={item.key} item={item} />
      )}
    </ParentList>
  );
};
