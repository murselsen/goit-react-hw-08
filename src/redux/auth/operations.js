import axios from "axios";
axios.defaults.baseURL = "https://connections-api.goit.global"; // Set your API base URL here
import { createAsyncThunk } from "@reduxjs/toolkit";

import { AUTH_LOGIN, AUTH_REGISTER } from "./constants";

export const register = createAsyncThunk(AUTH_REGISTER, async (_, thunkAPI) => {
  try {
    const { name, email, password } = _;
    const rawBody = JSON.stringify({
      name: name,
      email: email,
      password: password,
    });
    const response = await axios.post("users/signup", rawBody);
    console.log("Registration response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    thunkAPI.dispatch({
      type: "SET_FIELD_ERROR",
      payload: {
        field: "registerFormGeneral",
        value: error.message || "An error occurred during registration",
      },
    });
    return thunkAPI.rejectWithValue(
      error.message || "An error occurred during registration"
    );
  }
});

export const login = createAsyncThunk(AUTH_LOGIN, async (_, thunkAPI) => {
  try {
    const { email, password } = _;
    const rawBody = JSON.stringify({ email, password });
    const response = await axios.post("users/login", rawBody);
    const data = response.data;
    console.log("Login response data:", response);
    return data;
  } catch (error) {
    console.error("Login error:", error);
    return thunkAPI.rejectWithValue(
      error.message || "An error occurred during login"
    );
  }
});
