import Document, { Html, Head, Main, NextScript } from "next/document";
import { TwitterScript } from "../components/atom/twitter";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <TwitterScript />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
