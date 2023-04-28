import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { APIClient } from "../Utils/Api/Api";
const initialState={
    searchterm:[],

}
export const fetchAsychsearch= createAsyncThunk(
    'home/fetchAsychsearch',
    async ({searchterm,cur}) => {
      const response = await APIClient.get(`/searchProductOrBrandOrCategory?cur=${cur}&value=${searchterm}`);
      const data = await response.data.data.data;
      return data;
    }
  );
const searchSlice= createSlice({
    name:'searchterm',
    initialState,
    reducers:{  clearSearch: (state, action) => {
        state.searchterm = [];
    }},
    extraReducers:(builder)=>{
      builder
      .addCase(fetchAsychsearch.fulfilled, (state, action) => {
        state.searchterm = action.payload;
      })
      .addCase(fetchAsychsearch.rejected, () => {
        console.log('rejected');
      })
    }
})
export const { setSearchTerm, clearSearch } = searchSlice.actions;
export const getSearchResults = (state) => state.searchterm.searchterm;
export default searchSlice.reducer;