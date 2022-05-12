import { AppBar, Toolbar, Typography, Badge } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext, useEffect } from "react";
import { cartContext } from "pages/_app";
function Mynav() {
  const { cart } = useContext(cartContext);
  useEffect(() => {
    console.log("cart:", cart);
  }, [cart]);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <span style={{ color: "orange" }}>My</span>Commerce
        </Typography>
        <Badge badgeContent={cart.cart.total_items} color="warning">
          <AddShoppingCartIcon color="white" />
        </Badge>
      </Toolbar>
    </AppBar>
  );
}

export default Mynav;
