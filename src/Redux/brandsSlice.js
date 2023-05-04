import { createSlice } from '@reduxjs/toolkit';

const brandsSlice = createSlice({
  name: 'brands',
  initialState: {
    availableBrands: [],
    selectedBrands: [],
    selectedData:[],
  },
  reducers: {
    setAvailableBrands(state, action) {
      state.availableBrands = action.payload;
    },
    setSelectedBrands(state, action) {
      state.selectedBrands = action.payload;
    },
    setSelectedData(state, action) {
      state.selectedData = action.payload;
    }
   
  }
});

export const { setAvailableBrands, setSelectedBrands,setSelectedData,setSelectedclear } = brandsSlice.actions;

export default brandsSlice.reducer;