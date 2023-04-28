import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './homeSlice'
import categorynavReducer from './filterSlice'
import sidebarReducer from './sidebarSlice'
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import searchReducer from './searchSlice'
import countryReducer from './countrySlice'
import userReducer from './userSlice'
import authReducer from './authSlice'
import filterReducer from './filterSlice'
import priceReducer from './priceFilter'



export const store = configureStore({
  reducer:{
    home:homeReducer,
    categoriesnav:categorynavReducer,
    sidebar:sidebarReducer,
    product:productReducer,
    cart:cartReducer,
    searchterm:searchReducer,
    country:countryReducer,
    user:userReducer,
    auth:authReducer,
    filter:filterReducer,
    priceFilter:priceReducer

    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  }
})





