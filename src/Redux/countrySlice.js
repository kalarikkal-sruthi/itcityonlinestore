import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    country: "KWD"
}
const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        setSelected: (state, action) => {
            state.country = action.payload
        }
    }
})
export const getCountry = (state) => state.country.country
export const { setSelected } = countrySlice.actions
export default countrySlice.reducer