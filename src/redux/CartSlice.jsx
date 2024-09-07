/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalPrice: 0,
  totalitems: 0,
};
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {},
    removetocart: (state, action) => {},
  },
});
const { addtocart, removetocart } = CartSlice.actions;
export default CartSlice.reducer;
