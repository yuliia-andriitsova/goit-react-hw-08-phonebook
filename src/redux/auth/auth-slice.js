import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      state.isLoading = true;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [authOperations.logIn.pending](state) {
      state.isLoading = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      toast.error('Invalid user!');
    },

    [authOperations.logOut.pending](state) {
      state.isLoading = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authOperations.getCurrentUser.pending](state) {
      state.isLoading = true;
    },
    [authOperations.getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoading = false;
      state.isLoggedIn = true;
    },

    [authOperations.getCurrentUser.rejected](state, action) {
      return initialState;
    },
  },
});

export default authSlice.reducer;
