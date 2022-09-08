import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  cart:Array<any>
}
const initialState:CartState = {
    cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    backToInitialCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setCart, backToInitialCart } =
  productSlice.actions;
export default productSlice.reducer;