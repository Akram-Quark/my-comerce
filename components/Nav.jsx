import { AppBar, Toolbar, Typography, Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext, useEffect } from "react";
import { cartContext } from "pages/_app";
import useDebug from "hooks/useDebug";
function Mynav() {
  const { cart } = useContext(cartContext);
  useDebug(cart, cart);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <span style={{ color: "orange" }}>My</span>Commerce
        </Typography>
        <IconButton aria-label="cart">
          <Badge badgeContent={cart?.cart?.total_items} color="warning">
            <AddShoppingCartIcon sx={{ color: "white" }} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Mynav;
