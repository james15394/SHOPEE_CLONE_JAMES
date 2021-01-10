import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Cart, Img, ProductInfo, HeaderContainer, useStyles } from "./Cart.js";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { db } from "../../firebase";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { getTotalBasket } from "../../reducers/ProductSlice.js";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { instance } from "../../api/axios";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ee4d2d" },
  },
});

const ShoppingCart = () => {
  const classes = useStyles();
  const history = useHistory();
  const basket = Object.values(useSelector((state) => state.products.entities));
  console.log(basket);
  const user = useSelector((state) => state.users.entities);
  console.log(user);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    const getClientSecret = async () => {
      const res = await instance({
        method: "post",
        url: `/create-payment-intent?total=${getTotalBasket(basket) * 100}`,
      });
      setClientSecret(res.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const deleteItem = (item) => {};

  const handleChange = async (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    console.log(payload);
    if (payload.error) {
      console.log(payload.error);
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      db.collection("user")
        .doc(user?.uid)
        .collection("orders")
        .doc(payload.paymentIntent.id)
        .set({
          time: payload.paymentIntent.created,
          items: basket,
          money: payload.paymentIntent.amount,
        })
        .then((docRef) => {
          console.log("save to db: ", docRef);
        })
        .catch((error) => {
          console.error("Error during saving to db: ", error);
        });
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      // dispatch(clearBasket());
      history.replace("/");
    }
  };

  return (
    <Cart>
      <Box
        display="flex"
        style={{ width: "100%", background: "#fff", minHeight: "100px" }}
        justifyContent="center"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          style={{ width: "1200px" }}
        >
          <Box display="flex" alignItems="center" flexGrow={1}>
            <Link to="/">
              <Img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/1200px-Shopee.svg.png"
                style={{ marginRight: "10px", marginBottom: "10px" }}
              />
            </Link>
            <Divider orientation="vertical" flexItem variant="middle" />
            <Typography
              variant="h5"
              style={{
                marginLeft: "10px",
                color: "#ee4d2d",
              }}
            >
              Giỏ hàng
            </Typography>
          </Box>
          <div className={classes.searchBar}>
            <InputBase placeholder="Search...."></InputBase>
            <Button>
              <SearchIcon />
            </Button>
          </div>
        </Box>
      </Box>
      {basket.length === 0 ? (
        <Typography
          component="div"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "50px",
          }}
        >
          <Box
            component="div"
            style={{
              background:
                "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f3540f6657bbdc1120e3f8cc90bdba97.png)",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "noRepeat",
              width: "100px",
              height: "100px",
            }}
          ></Box>
          <Box component="div" textAlign="center" m={2}>
            Giỏ hàng của bạn còn trống
          </Box>
          <ThemeProvider theme={theme}>
            <Button color="primary" variant="contained" component={Link} to="/">
              Mua ngay
            </Button>
          </ThemeProvider>
        </Typography>
      ) : (
        <ProductInfo>
          <Box width="100%" component="div">
            <Table component={Paper}>
              <TableCell>Sản phẩm</TableCell>
              <TableCell>Đơn giá</TableCell>
              <TableCell>Số lượng</TableCell>
              <TableCell align="right">Số tiền</TableCell>
              <TableCell align="right">Thao tác</TableCell>
            </Table>
          </Box>
          {basket.map((item) => (
            <CurrencyFormat
              displayType="text"
              value={item.price * item.number}
              prefix={"$"}
              thousandSeparator={true}
              renderText={(value) => (
                <Box width="100%" component="div" my={2}>
                  <Table component={Paper}>
                    <TableRow>
                      <TableCell>
                        <img
                          src={item.image}
                          style={{ width: "5rem", height: "5rem" }}
                          alt=""
                        />
                        <h4>{item.description}</h4>
                      </TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>
                        <IconButton>
                          <AddIcon />
                        </IconButton>{" "}
                        {item.number}{" "}
                        <IconButton>
                          <RemoveIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">{value}</TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <h5 onClick={() => deleteItem(item)}>Xóa</h5>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </Table>
                </Box>
              )}
            />
          ))}
          <CurrencyFormat
            displayType="text"
            value={getTotalBasket(basket)}
            prefix={"$"}
            thousandSeparator={true}
            renderText={(value) => (
              <TableContainer
                component={Paper}
                style={{ position: "sticky", bottom: "0" }}
              >
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row" />
                      <TableCell align="right">Shopee Voucher</TableCell>
                      <TableCell align="right">Shopee Voucher</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" />
                      <TableCell align="right">Bạn chưa có SHopee xu</TableCell>
                      <TableCell align="right">-0đ</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        CHọn tất cả ({basket.length} sản phẩm) Xóa
                      </TableCell>
                      <TableCell align="right">
                        Tổng tiền hàng ({basket.length} sản phẩm):
                        {value}
                      </TableCell>
                      <TableCell align="right">
                        <Button>Mua hàng</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          />
          <FormControl fullWidth>
            <CardElement
              style={{ padding: "10px 20px" }}
              onChange={handleChange}
            />
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={handleSubmit}
              disabled={processing || error || disabled}
            >
              {processing ? "Loading...." : "Pay now"}s
            </Button>
          </FormControl>
          {error && <div style={{ width: "100%" }}>{error}</div>}
        </ProductInfo>
      )}
    </Cart>
  );
};

export default ShoppingCart;
