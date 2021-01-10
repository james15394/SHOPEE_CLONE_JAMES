import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { products } from "./data";
import { useStyles } from "./Product";

const Product = () => {
  const classes = useStyles();
  return (
    <Box style={{ background: "#F5F5F5" }}>
      <Grid container spacing={2} className={classes.grid} alignItems="center">
        {products.map(({ image, description, price, id }) => (
          <Grid item className={classes.root}>
            <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    src={image}
                    height="200"
                    title="snack1"
                  />
                  <CardContent>
                    <Typography variant="body2">{description}</Typography>
                    <Typography variant="h6">đ {price}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;
