import { renderToString, ParseError } from "katex";
import { FC } from "react";

function render(expression: string, displayMode: boolean): string {
  let result = "";
  try {
    result = renderToString(expression, { displayMode: displayMode });
  } catch (e) {
    if (e instanceof ParseError) {
      result = e.message;
    }
    if (process.env.NODE_ENV !== "production") {
      console.error(e);
    }
  }
  return result;
}

interface Props {
  displayMode?: boolean;
  children: string;
}

const Equation: FC<Props> = ({ children, displayMode = true }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: render(children, displayMode),
      }}
    />
  );
};

export default Equation;
