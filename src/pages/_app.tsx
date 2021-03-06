import "../styles/global.css";
import Footer from "../components/atom/footer";
import { AppProps } from "next/app";
import { ErrorBoundary } from "../components/boundaries/errorBoundary";

const App = ({ Component, pageProps }: AppProps) => (
  <ErrorBoundary>
    <Component {...pageProps} />
    <Footer />
  </ErrorBoundary>
);

export default App;
