import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./constants";
const initialState = {
  type: "",
  value: "",
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState: initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default slice.reducer;
