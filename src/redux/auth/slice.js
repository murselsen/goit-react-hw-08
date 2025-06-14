import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  SLICE_NAME,
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,
  AUTH_REGISTER_PENDING,
  AUTH_REGISTER_FULFILLED,
  AUTH_REGISTER_REJECTED,
} from "./constants";
const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState: initialState,
  extraReducers: (builder) => {
    // Authentication Login Actions
    builder.addCase(AUTH_LOGIN_PENDING, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(AUTH_LOGIN_FULFILLED, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = {
        name: action.payload.user.name,
        email: action.payload.user.email,
      };
      state.error = null;
    });
    builder.addCase(AUTH_LOGIN_REJECTED, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Authentication Register Actions
    builder.addCase(AUTH_REGISTER_PENDING, (state) => {
      state.isLoading = true;
    });
    builder.addCase(AUTH_REGISTER_FULFILLED, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = {
        name: action.payload.user.name,
        email: action.payload.user.email,
      };
      state.error = null;
    });
    builder.addCase(AUTH_REGISTER_REJECTED, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const authPersistReducer = persistReducer(
  {
    key: SLICE_NAME,
    storage: storage,
    whitelist: ["token"],
  },
  slice.reducer
);

export default authPersistReducer;
