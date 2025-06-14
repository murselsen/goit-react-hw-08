import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  AUTH_LOGIN,
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_REJECTED,
  SLICE_NAME,
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
