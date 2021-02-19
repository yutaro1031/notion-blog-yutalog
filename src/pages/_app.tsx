import "../styles/global.css";
import "katex/dist/katex.css";
import Footer from "../components/footer";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
