import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
function Product({ item, onAddToCart }) {
  const [count, setCount] = useState(0);
  return (
    <Grid item lg={4} sm={12} md={6} mt={2}>
      <Card sx={{ maxWidth: 345, margin: "0 auto", minWidth: 345 }}>
        <Image
          alt="green iguana"
          height={200}
          width={345}
          objectFit="cover"
          layout="responsive"
          priority
          src={item.image.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="body2" color="blueviolet">
            {item.sku} piece (s)
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: item.description }}
            variant="body2"
            color="text.secondary"
          />

          <Typography variant="h6" color="tomato">
            {item.price.formatted_with_code}
          </Typography>
          <Typography variant="body2">
            Item added {count} times to card
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            onClick={() => {
              onAddToCart(item.id, 1);
              setCount((prev) => prev + 1);
            }}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Product;
