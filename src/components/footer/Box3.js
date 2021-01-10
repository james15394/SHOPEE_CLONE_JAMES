import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
  },
}));
const Box3 = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={4}
        className={classes.root}
        justify="space-between"
      >
        <Grid item>
          <Typography variant="h2">CHĂM SÓC KHÁCH HÀNG</Typography>
          <Typography variant="subtitle1">
            <Link>Trung Tâm Trợ Giúp</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Shopee Blog</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Shopee Mall</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Hướng Dẫn Mua Hàng</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Thanh Toán</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Shopee Xu</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Thanh Toán</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Shopee Xu</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2">VỀ SHOPPEE</Typography>
          <Typography variant="subtitle1">
            <Link>Trung Tâm Trợ Giúp</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Shopee Blog</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Shopee Mall</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Hướng Dẫn Mua Hàng</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Thanh Toán</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Shopee Xu</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2">TẢI ỨNG DỤNG SHOPPEE NGAY THÔI</Typography>
          <Typography variant="subtitle1">
            <Link>Trung Tâm Trợ Giúp</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Shopee Blog</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Shopee Mall</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Hướng Dẫn Mua Hàng</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Thanh Toán</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Shopee Xu</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2">THANH TOÁN</Typography>
          <Typography variant="subtitle1">
            <Link>Trung Tâm Trợ Giúp</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Shopee Blog</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Shopee Mall</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Hướng Dẫn Mua Hàng</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Thanh Toán</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Shopee Xu</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2">THEO DÕI CHÚNG TÔI TRÊN</Typography>
          <Typography variant="subtitle1">
            <Link>Facebook</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Instagram</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link>Linkedin</Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Box3;
