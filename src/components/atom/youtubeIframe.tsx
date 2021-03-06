import { ComponentPropsWithoutRef, FC } from "react";

type Props = ComponentPropsWithoutRef<"iframe">;

export const YoutubeIframe: FC<Props> = ({ ...props }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%",
      }}
    >
      <iframe
        {...props}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};
