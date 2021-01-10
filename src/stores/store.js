import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import productReducer from "../reducers/ProductSlice";
import userReducer from "../reducers/userSlice";

const combineReducer = combineReducers({
  products: productReducer,
  users: userReducer,
});

const rootProductReducer = (state, action) => {
  if (action.type === "products/setLogOut") {
    state.products = undefined;
    state.users = undefined;
  }
  return combineReducer(state, action);
};
export default configureStore({
  reducer: rootProductReducer,
  middleware: [...getDefaultMiddleware({ immutableCheck: false })],
});
