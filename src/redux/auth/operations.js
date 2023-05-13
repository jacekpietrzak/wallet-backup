import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = token;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      axios.defaults.baseURL = 'https://wallet.goit.ua/api/';
      const res = await axios.post('auth/sign-up', credentials);

      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.response.status === 409) {
        return thunkAPI.rejectWithValue('Email is already in use');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      axios.defaults.baseURL = 'https://wallet.goit.ua/api/';
      const res = await axios.post('/auth/sign-in', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.response.status === 400) {
        return thunkAPI.rejectWithValue('Validation error');
      }

      if (error.response.status === 403) {
        return thunkAPI.rejectWithValue('Incorrect email or password');
      }

      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue('User with such email not found');
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      axios.defaults.baseURL = 'https://wallet.goit.ua/api/';
      await axios.delete('/auth/sign-out');
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      axios.defaults.baseURL = 'https://wallet.goit.ua/api/';
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('https://wallet.goit.ua/api/users/current');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
