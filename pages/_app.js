import "../styles/globals.css";
import Mynav from "components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Mynav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
