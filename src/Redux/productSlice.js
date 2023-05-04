import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIClient } from "../Utils/Api/Api";






const initialState = {
  singleproduct: [],
  loading: false,



}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncproducts.fulfilled, (state, action) => {
        state.singleproduct = action.payload;
        state.loading = false;
      })
      .addCase(fetchAsyncproducts.pending, (state, action) => {
        console.log("rejected");
        state.loading = true;
      })



  }
})

export const fetchAsyncproducts = createAsyncThunk('name/fetchAsyncproducts',
  async ({ product, cur }) => {
    try {
      const response = await APIClient.get(`/findProductbyProductId?cur=${cur}&product_id=${product}`)
      const data = await response.data.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  });







export const getProductitem = (state) => state.product.singleproduct;

export default productSlice.reducer;
