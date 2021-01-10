import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Header__top, Header__topContainer, useStyles } from "./App__top";
import { useSelector } from "react-redux";
import { Button, Divider, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Logout from "./Logout";

const HeaderTop = () => {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.users.entities);
  return (
    <Header__top>
      <Header__topContainer>
        <Typography className={classes.root} component="div">
          <Link href="#" underline="none">
            Kênh người bán
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link href="#" underline="none">
            Tải ứng dụng
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link href="#" underline="none">
            Kết nối
          </Link>
          <Link href="#" underline="none" style={{ marginLeft: "5px" }}>
            <FacebookIcon />
          </Link>
          <Link href="#" underline="none" style={{ marginLeft: "0" }}>
            <InstagramIcon />
          </Link>
        </Typography>

        <Typography className={classes.root} component="div">
          <Button startIcon={<NotificationsNoneIcon />}>
            <Link underline="none">Thông báo</Link>
          </Button>

          <Link underline="none">
            <Button startIcon={<HelpOutlineIcon />}>Trợ giúp</Button>
          </Link>
          {currentUser ? (
            <Logout email={currentUser?.email} />
          ) : (
            <>
              <Link href="/signin" underline="none">
                Đăng kí
              </Link>
              <Link href="/signup" underline="none">
                Đăng nhập
              </Link>
            </>
          )}
        </Typography>
      </Header__topContainer>
    </Header__top>
  );
};

export default HeaderTop;
