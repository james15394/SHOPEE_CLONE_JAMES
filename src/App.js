import { BrowserRouter, Route, Switch } from "react-router-dom";
import { products } from "./components/products/data.js";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  Header,
  ProductDetail,
  Product,
  SignUp,
  ShoppingCart,
  HeaderTop,
  SignIn,
} from "./components";
import { setUser } from "./reducers/userSlice";
import { getUser, setProducts } from "./reducers/ProductSlice";
import Footer from "./components/footer/index.js";
import Ad from "./components/ads/index.js";
import List from "./components/list/index.js";

function App() {
  const [productNum, setProductNum] = useState(1);
  const promise = loadStripe(
    "pk_test_51Ho9GrCZCNBMhcHLG4vvSqEpprUZCnYNM8rCTSZDmyfpjUlPYOgLCUsxwNyWTxsGRHgwIpf7tyAgTBkmJHzgZewY00pfRyUpEd"
  );

  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
        const productRef = db.collection("userProduct").doc(user.uid);
        productRef &&
          productRef
            .get()
            .then(function (doc) {
              if (doc.exists) {
                dispatch(setProducts(user.uid, doc.data()));
              } else {
                console.log("No such document!");
                dispatch(getUser(user.uid));
              }
            })
            .catch(function (error) {
              console.log("Error getting document:", error);
            });
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/products/:productId">
            <HeaderTop />
            <Header />
            <ProductDetail
              products={products}
              productNum={productNum}
              setProductNum={setProductNum}
            />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/shoppingcart">
            <HeaderTop />
            <Elements stripe={promise}>
              <ShoppingCart
                productNum={productNum}
                setProductNum={setProductNum}
              />
            </Elements>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/">
            <HeaderTop />
            <Header />
            <Ad />
            <List />
            <Product />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
