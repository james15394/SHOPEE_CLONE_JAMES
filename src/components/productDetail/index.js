import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
  ButtonGroup,
  Input,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./ProductDetail";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  RightContainer,
  Quantity,
  ProductDetailSection,
  theme,
} from "./ProductDetail";
import Rating from "../rating";
import { auth, db } from "../../firebase";
import { addToBasket } from "../../reducers/ProductSlice";

const ProductDetail = ({ products, productNum, setProductNum }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.entities);
  const basket = useSelector((state) => state.products.entities);
  const { productId } = useParams();
  const product = products.find(
    (productItem) => productItem.id === Number(productId)
  );
  const { id, image, description, rating, price, countInStock } = product;

  const addItem = () => {
    productNum < countInStock && setProductNum((prev) => prev + 1);
  };

  const handleChange = (e) => {
    setProductNum(e.target.value);
  };

  const removeItem = () => {
    productNum > 1 && setProductNum((prev) => prev - 1);
  };
  useEffect(() => {
    db.collection("userProduct")
      .doc(user.uid)
      .set(basket, { merge: true })
      .then((docRef) => {
        console.log("save to db: ", docRef);
      })
      .catch((error) => {
        console.error("Error during saving to db: ", error);
      });
  }, [basket]);
  const addToStore = async () => {
    const newProduct = { ...product, number: productNum };
    dispatch(addToBasket(newProduct));
    setProductNum(1);
  };

  return (
    <ThemeProvider theme={theme}>
      <ProductDetailSection>
        <Card className={classes.root}>
          <CardMedia component="img" src={image} className={classes.media} />
          <RightContainer>
            <CardHeader
              title={description}
              subheader={<Rating rating={rating} />}
            />
            <CardContent>
              <Typography
                variant="h5"
                color="secondary"
                style={{ background: "#FAFAFA", padding: " 0 10px" }}
                gutterBottom
              >
                đ{price}
              </Typography>
              <Quantity>
                <Typography variant="body1">Số lượng</Typography>
                <ButtonGroup
                  size="small"
                  disableRipple
                  className={classes.btnGroup}
                >
                  <Button>
                    <AddIcon onClick={addItem} />
                  </Button>
                  <Button>
                    <Input
                      className={classes.input}
                      value={productNum}
                      disableUnderline
                      onChange={handleChange}
                    >
                      {productNum}
                    </Input>
                  </Button>
                  <Button>
                    <RemoveIcon onClick={removeItem} />
                  </Button>
                </ButtonGroup>
                <Typography variant="body2">
                  {countInStock} sản phẩm có sẵn
                </Typography>
              </Quantity>
            </CardContent>
            <CardActions>
              <Button
                className={classes.button1}
                startIcon={<ShoppingBasketIcon />}
                onClick={user ? addToStore : ""}
                href={!user ? "/signup" : ""}
              >
                Thêm vào giỏ hàng
              </Button>
              <Button
                type="button"
                className={classes.button2}
                href={user ? "/shoppingcart" : "/signup"}
              >
                Mua ngay
              </Button>
            </CardActions>
          </RightContainer>
        </Card>
      </ProductDetailSection>
    </ThemeProvider>
  );
};

ProductDetail.propTypes = {
  productNum: PropTypes.number,
  countInStock: PropTypes.number,
  image: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
};
export default ProductDetail;
