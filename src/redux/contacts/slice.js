import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./constants";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState: initialState,
  extraReducers: () => {},
});

export default slice.reducer;
