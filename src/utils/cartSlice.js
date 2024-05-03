import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //redux toolkit uses immer BTS
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    //originalState = {items:["pizza"]}
    clearCart: (state) => {
      //   console.log(current(state));

      //RTK - either mutate the existing state or return new state
      state.items.length = 0;
      // this can also be used to clear the state -- returns originalState = []
      //   return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
//explore more on redux
//middlewares -- thunks -- RTK query -->explore more
