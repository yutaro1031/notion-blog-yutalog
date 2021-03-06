import { ComponentPropsWithoutRef, CSSProperties, FC } from "react";

interface Props extends ComponentPropsWithoutRef<"img"> {
  width: CSSProperties["width"];
  height: CSSProperties["height"];
}

export const Image: FC<Props> = ({ width, height, ...props }) => {
  return (
    <img
      style={{
        width: "100%",
        maxWidth: width,
        height,
      }}
      {...props}
    />
  );
};
