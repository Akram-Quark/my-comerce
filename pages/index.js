import Products from "components/products";
import { commerce } from "lib/commerce";
import { cartContext, productsContext } from "./_app";
import { useContext, useEffect } from "react";

export default function Home({ products_res, cart_res }) {
  const { cart, setCart } = useContext(cartContext);
  const { products, setProducts } = useContext(productsContext);

  const addToCart = async (prodId, quantity) => {
    const item = await commerce.cart.add(prodId, quantity);
    setCart(item);
  };
  useEffect(() => {
    setProducts(products_res);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Products products_res={products} onAddToCart={addToCart} />
    </div>
  );
}
export async function getServerSideProps() {
  const response = await commerce.products.list();
  const cart = await commerce.cart.retrieve();
  return {
    props: {
      products_res: response?.data,
      cart_res: cart,
    },
  };
}
