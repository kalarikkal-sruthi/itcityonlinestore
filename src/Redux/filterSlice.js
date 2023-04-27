import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIClient } from "../Utils/Api/Api";



// navbarcategories
export const fetchAsyncategories = createAsyncThunk(
  'categoriesnav/fetchAsynccategories',
  async () => {
    const response = await APIClient.get(`/findAllCategories`);
    const data = await response.data.data;
    return data;
  }
);
//productbycategory
export const fetchAsyncinnerproducts = createAsyncThunk(
  'categoriesnav/fetchAsyncsubcategories',
  async ({category,cur}) => {
    const response = await APIClient.get(`/findAllProductbyCategoryid?cur=${cur}&category_id=${category}`);
    const data = await response.data.data;
    return data;
  }
);
//subcategorybycategory
export const fetchAsyncsubcategorybycategory = createAsyncThunk(
  'categoriesnav/fetchAsyncsubcategorybycategory',
  async (category) => {
    const response = await APIClient.get(`/findsubcategorybycategory?category_id=${category}`);
    const data = await response.data.data;
    return data;
  }
);
//getfindAllBrandDetails
export const fetchAsyncgetfindAllBrandDetails = createAsyncThunk(
  'categoriesnav/fetchAsyncgetfindAllBrandDetails',
  async () => {
    const response = await APIClient.get(`/findAllBrandDetails`);
    const data = await response.data.data;
    return data;
  }
);
//getAllProductBycolor
export const fetchAsyncgetAllProductByColor = createAsyncThunk(
  'categoriesnav/fetchAsyncgetAllProductByColor',
  async (brand_id) => {
    const response = await APIClient.get(`/getAllColor`);
    const data = await response.data.data;
    return data;
  }
);
const initialState = {
  categoriesnav: [],
  innerproducts: [],
  subcategory:[],
  brand:[],
  color:[]
}
const categorynavSlice = createSlice({
  name: "categoriesnav",
  initialState,
  reducers: {},
  extraReducers:(builder) =>{
    builder
    .addCase(fetchAsyncategories.fulfilled, (state, action) => {
      state.categoriesnav = action.payload;
    })
    .addCase(fetchAsyncategories.rejected, () => {
      console.log('Rejected')
  })
  .addCase(fetchAsyncinnerproducts.fulfilled, (state, action) => {
    state.innerproducts = action.payload;
})
  .addCase(fetchAsyncinnerproducts.rejected, () => {
    console.log('Rejected')
})

.addCase(fetchAsyncsubcategorybycategory.fulfilled, (state, action) => {
  state.subcategory = action.payload;
})

.addCase(fetchAsyncsubcategorybycategory.rejected, () => {
  console.log('Rejected')
})


.addCase(fetchAsyncgetfindAllBrandDetails.fulfilled, (state, action) => {
  state.brand = action.payload;
})

.addCase(fetchAsyncgetfindAllBrandDetails.rejected, () => {
  console.log('Rejected')
})

.addCase(fetchAsyncgetAllProductByColor.fulfilled, (state, action) => {
  state.color = action.payload;
})

.addCase(fetchAsyncgetAllProductByColor.rejected, () => {
  console.log('Rejected')
})
  },
},)


export const getcategoriesNav = (state) => state.categoriesnav.categoriesnav;
export const getinnerProducts = (state) => state.categoriesnav.innerproducts;
export const getsubcategory = (state) => state.categoriesnav.subcategory;
export const getbrands = (state) => state.categoriesnav.brand;
export const getcolors = (state) => state.categoriesnav.color;

export default categorynavSlice.reducer






