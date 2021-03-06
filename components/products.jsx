import Product from "./product";
import { Grid } from "@mui/material";
function Products({ products_res, onAddToCart }) {
  return (
    <Grid container spacing={2}>
      {products_res.map((item) => (
        <Product item={item} key={item.id} onAddToCart={onAddToCart} />
      ))}
    </Grid>
  );
}

export default Products;
