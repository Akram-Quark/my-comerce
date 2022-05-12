import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
function Product({ item }) {
  return (
    <Grid item xs={12} md={6} lg={4} mt={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          src={item.image.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name} {item.sku}
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: item.description }}
            variant="body2"
            color="text.secondary"
          />

          <Typography variant="h6" color="tomato">
            {item.price.formatted_with_code}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" variant="contained" color="primary">
            Add to card
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Product;
