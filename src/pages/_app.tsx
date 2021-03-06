import "../styles/global.css";
import Footer from "../components/atom/footer";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
