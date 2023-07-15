import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  encodedToken: null,
  isLoading: false,
  error: null,
  getdaata: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: state => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
    },
    setEncodedToken: (state, action) => {
      state.encodedToken = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    signupRequest: state => {
      state.isLoading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
    },
    signupFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.token = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  signupRequest,
  signupSuccess,
  signupFailure,
  logout,
  setEncodedToken,
} = authSlice.actions;

export default authSlice.reducer;
