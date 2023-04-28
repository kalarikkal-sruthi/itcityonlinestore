import { createSlice } from '@reduxjs/toolkit';

export const priceFilterSlice = createSlice({
  name: 'priceFilter',
  initialState: {
    minPrice: '',
    maxPrice: '',
  },
  reducers: {
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});

export const { setMinPrice, setMaxPrice } = priceFilterSlice.actions;

export default priceFilterSlice.reducer;