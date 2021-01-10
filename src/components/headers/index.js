import React, { useEffect } from "react";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { HeaderSection, Header__middle, useStyles } from "./Header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, Button, InputBase, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { db } from "../../firebase";

const Header = () => {
  const productEntities = useSelector((state) => state.products);
  const products = productEntities?.entities;
  const basket = Object.keys(products);
  const user = useSelector((state) => state.users);

  const classes = useStyles();
  return (
    <HeaderSection>
      <Header__middle>
        <Link to="/" style={{ textDecoration: "none", marginRight: "10px" }}>
          <Typography variant="h4" style={{ color: "#fff" }}>
            Shopee
          </Typography>
        </Link>
        <div className={classes.root}>
          <InputBase
            placeholder="Tìm sản phẩm, thương hiệu, tên Shop"
            style={{ fontSize: "0.8rem" }}
          ></InputBase>
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <IconButton style={{ marginLeft: "20px" }}>
          <Link
            to={user ? "/shoppingcart" : "/signup"}
            style={{ textDecoration: "none" }}
          >
            <Badge badgeContent={basket.length} className={classes.badge}>
              <ShoppingCartIcon
                style={{
                  color: "#fff",
                  fontSize: "2rem",
                }}
              />
            </Badge>
          </Link>
        </IconButton>
      </Header__middle>
    </HeaderSection>
  );
};

export default Header;
