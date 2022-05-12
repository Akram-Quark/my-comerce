import Image from "next/image";
import styles from "../styles/Home.module.css";
import Products from "components/products";
import { Grid } from "@mui/material";
import { commerce } from "lib/commerce";

export default function Home({ products_res }) {
  return (
    <Grid container>
      <Products products_res={products_res} />
    </Grid>
  );
}
export async function getServerSideProps() {
  const response = await commerce.products.list();

  return {
    props: {
      products_res: response?.data,
    },
  };
}
