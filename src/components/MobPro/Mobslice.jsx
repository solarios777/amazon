import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menClothing : null,
  electronics: null,
  womenClothing: null,
  jewelery: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.menClothing = action.payload.menClothing;
      state.electronics = action.payload.electronics;
      state.womenClothing = action.payload.womenClothing;
      state.jewelery = action.payload.jewelery;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectmenClothing  = (state) => state.product.menClothing ;
export const selectelectronics = (state) => state.product.electronics;
export const selectwomenClothing = (state) => state.product.womenClothing;
export const selectjewelery = (state) => state.product.jewelery;

export default productSlice.reducer;
