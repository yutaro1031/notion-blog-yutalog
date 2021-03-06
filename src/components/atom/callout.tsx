import { FC } from "react";

interface Props {
  icon: string;
}

export const Callout: FC<Props> = ({ icon, children }) => {
  return (
    <div className="callout">
      <div>{icon}</div>
      <div className="text">{children}</div>
    </div>
  );
};
