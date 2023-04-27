import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = null;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.accessToken = null;
      state.user = null;
      state.error = action.payload;
    },
    logout(state) {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;