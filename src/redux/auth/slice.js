import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { SLICE_NAME } from "./constants";
const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState: initialState,
  extraReducers: () => {},
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
