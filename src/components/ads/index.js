import { ButtonBase } from "@material-ui/core";
import React from "react";
import Img1 from "../../images/1.jpg";
import Img2 from "../../images/2.jpg";
import Img3 from "../../images/3.jpg";
import Img4 from "../../images/4.jpg";
import Img5 from "../../images/1.1.jpg";
import Img6 from "../../images/1.2.jpg";
import { useStyles } from "./Ad";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Ad() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.banner}>
          <div className={classes.flex1}>
            <Slider {...settings}>
              <ButtonBase>
                <img src={Img1} alt="" />
              </ButtonBase>
              <ButtonBase>
                <img src={Img2} alt="" />
              </ButtonBase>
              <ButtonBase>
                <img src={Img3} alt="" />
              </ButtonBase>
              <ButtonBase>
                <img src={Img4} alt="" />
              </ButtonBase>
            </Slider>
          </div>
          <div className={classes.flex2}>
            <div>
              <ButtonBase>
                <img src={Img5} alt="" />
              </ButtonBase>
            </div>
            <div style={{ marginTop: "5px" }}>
              <ButtonBase>
                <img src={Img6} alt="" />
              </ButtonBase>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
