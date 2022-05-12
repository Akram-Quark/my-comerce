import Products from "components/products";
import { Grid } from "@mui/material";
import { commerce } from "lib/commerce";
import { cartContext, productsContext } from "./_app";
import { useContext, useEffect } from "react";

export default function Home({ products_res, cart_res }) {
  const { cart, setCart } = useContext(cartContext);
  const { products, setProducts } = useContext(productsContext);
  useEffect(() => {
    setCart(cart_res);
    setProducts(products_res);
  }, []);

  const addToCart = async (prodId, quantity) => {
    const item = await commerce.cart.add(prodId, quantity);
    setCart(item);
  };

  return (
    <Grid container>
      <Products products_res={products} onAddToCart={addToCart} />
    </Grid>
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
