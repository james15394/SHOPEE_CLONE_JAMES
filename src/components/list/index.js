import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { items } from "./data";
import { useStyles } from "./List";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const List = () => {
  const classes = useStyles();
  const settings = {
    infinite: false,
    slidesToShow: 4,
    speed: 300,
    rows: 2,
    slidesPerRow: 2,
    initialSlide: 0,
  };
  return (
    <div style={{ background: "#F5F5F5" }}>
      <div className={classes.root}>
        <Typography variant="subtitle1" className={classes.title}>
          DANH MỤC
        </Typography>
        <Divider />
        <Slider {...settings} style={{ width: "100%" }}>
          {items.map((item) => (
            <Card>
              <CardMedia image={item.img} />
              <CardContent>{item.des}</CardContent>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default List;
