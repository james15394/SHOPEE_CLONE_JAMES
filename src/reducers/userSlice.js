import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser(state, action) {
      state.entities = action.payload;
    },
  },
  extraReducers: {},
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
