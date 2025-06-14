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
  reducers: {
    resetContacts: (state) => {
      state.items = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: () => {},
});

export default slice.reducer;
