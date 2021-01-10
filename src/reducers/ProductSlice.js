import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const productAdapter = createEntityAdapter();
const initialState = productAdapter.getInitialState({
  user: null,
  error: null,
});

//Selectors
export const getTotalBasket = (basket) =>
  basket?.reduce((acc, current) => acc + current.price * current.number, 0);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToBasket(state, action) {
      const { id } = action.payload;
      state.entities[id] = action.payload;
    },
    setProducts: {
      reducer(state, action) {
        const { id, products } = action.payload;
        Object.entries(products).map(([a, b]) => (state.entities[a] = b));
        state.user = id;
      },
      prepare(id, products) {
        return {
          payload: { id, products },
        };
      },
    },
    getUser(state, action) {
      state.user = action.payload;
    },
    setLogOut: (state) => {},
  },
  extraReducers: {},
});

export default productSlice.reducer;
export const {
  setProducts,
  addToBasket,
  getUser,
  setLogOut,
} = productSlice.actions;
