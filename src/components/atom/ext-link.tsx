import { ComponentPropsWithoutRef, FC } from "react";

const ExtLink: FC<ComponentPropsWithoutRef<"a">> = (props) => (
  <a {...props} rel="noopener" target={props.target || "_blank"} />
);

export default ExtLink;
