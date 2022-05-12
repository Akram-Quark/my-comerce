import { AppBar, Toolbar, Typography, Badge } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Mynav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Commerce
        </Typography>
        <Badge badgeContent={4} color="secondary">
          <AddShoppingCartIcon color="white" />
        </Badge>
      </Toolbar>
    </AppBar>
  );
}

export default Mynav;
