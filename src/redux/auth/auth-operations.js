import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      token.set(response.token);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('/users/login', credentials);
      token.set(response.data.token);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('/users/logout', credentials);
      token.unset();
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      token.set(state.auth.token);
      const response = await axios.get('/users/current');

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  token,
  getCurrentUser,
};

export default operations;
