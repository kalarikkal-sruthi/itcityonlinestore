import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { APIClient } from '../Utils/Api/Api';
import { createSelector } from 'reselect';

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if(cart){
      return JSON.parse(localStorage.getItem('cart'));
  } else {
      return [];
  }
}

const storeInLocalStorage = (token,user) => {
  localStorage.setItem('user', JSON.stringify(token));
  localStorage.setItem('user', JSON.stringify(user))
}


const userSlice = createSlice({
    name: 'user',
    initialState: {
    token:"",
    user:[],


    },
    reducers: {
      clearUser: (state) => {
        state.token = "";
        state.user = [];
        storeInLocalStorage(state.token);
        storeInLocalStorage(state.user);
    },
    
    },
    extraReducers:(builder)=>{
        builder
        .addCase(registration.fulfilled, (state, action) => {
            state.token=action.payload;
            state.user = action.payload;
           
          
          })
          .addCase(registration.rejected, (state, action) => {
           
            console.log('rejected');
          })
        .addCase(login.fulfilled, (state, action) => {
          state.token=action.payload;
          state.user = action.payload;
         
          return state;
        
        })
        .addCase(login.rejected, (state,action) => {
          console.log('rejected');
        })
    }
    
  });
  export const registration = createAsyncThunk(
      'registration/registerUser',
      async (userData) => {
          try {
              const response = await APIClient.post('/register', userData);
              return response.data.data;
            } catch (error) {
              if (!error.response) {
                throw error;
              }
      }}
 );
 export const login = createAsyncThunk('auth/login', async ({ customer_email, password },) => {

    try {

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      const response = await APIClient.post('/login', { customer_email, password },config);
      const token = response.data.token;
      console.log('token',token);
      localStorage.setItem('token',token)
      localStorage.setItem('token', JSON.stringify(token))
      const user=response.data.user
  
 
      localStorage.setItem('user',user)
      localStorage.setItem('user', JSON.stringify(user))

      return {token,user};
    } catch (error) {
      throw new Error(error.response.data.message);
    }
});



  
  
  
  
  
  

const selectUser = state => state.user;
export const selectToken = createSelector(
    selectUser,
    user => user.token
  );
export const {loginuser,clearUser}=userSlice.actions
export const getToken=(state)=>state.user.token;
export const getUser=(state)=>state.user.user;
export default userSlice.reducer;