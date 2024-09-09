/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
  items: [],
  totalPrice: 0,
  totalitems: 0,
};
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const index = state.items.findIndex(
        (items) => items.id === action.payload.id
      );

      if (index >= 0) {
        state.items[index].quantity += 1;
      } else {
        const newItems = { ...action.payload, quantity: 1 };
        state.items.push(newItems);
        state.totalitems += 1;
      }
      state.totalPrice += action.payload.price;
    },

    removeTocart: (state, action) => {
      const index = state.items.findIndex(
        (items) => items.id === action.payload.id
      );
      state.totalitems -= 1;
      // state.totalPrice -=
      //   state.items[index].price * state.items[index].quantity;
      state.items.splice(index, 1);
    },
  },
});

export const { addTocart, removeTocart } = CartSlice.actions;
export default CartSlice.reducer;
