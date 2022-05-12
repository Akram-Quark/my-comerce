import Product from "./product";
import { Grid } from "@mui/material";
function Products({ products_res }) {
  const products = products_res;

  return (
    <Grid container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Grid>
  );
}

export default Products;
