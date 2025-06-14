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
  AUTH_CURRENT_PENDING,
  AUTH_CURRENT_FULFILLED,
  AUTH_CURRENT_REJECTED,
  AUTH_LOGOUT,
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AUTH_LOGOUT, (state) => {
      state = state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(AUTH_CURRENT_PENDING, (state) => {
      state.isRefreshing = true;
      state.isLoading = true;
    });
    builder.addCase(AUTH_CURRENT_FULFILLED, (state, action) => {
      state.isRefreshing = false;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
    });
    builder.addCase(AUTH_CURRENT_REJECTED, (state, action) => {
      state.isRefreshing = false;
      state.isLoading = false;
      state.error = action.payload;
    });
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
