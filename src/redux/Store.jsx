import CartSlice from "./CartSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: CartSlice,
});
