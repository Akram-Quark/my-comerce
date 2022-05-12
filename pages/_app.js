import "../styles/globals.css";
import Mynav from "components/Nav";
import { createContext, useState } from "react";

export const cartContext = createContext({});
export const productsContext = createContext({});

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  return (
    <>
      <productsContext.Provider value={{ products, setProducts }}>
        <cartContext.Provider value={{ cart, setCart }}>
          <Mynav />
          <Component {...pageProps} />
        </cartContext.Provider>
      </productsContext.Provider>
    </>
  );
}

export default MyApp;
