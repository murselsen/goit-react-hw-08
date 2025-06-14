import axios from "axios";
axios.defaults.baseURL = "https://connections-api.goit.global"; // Set your API base URL here
import { createAsyncThunk } from "@reduxjs/toolkit";

import { AUTH_LOGIN, AUTH_REGISTER } from "./constants";

export const login = createAsyncThunk(AUTH_LOGIN, async (_, thunkAPI) => {
  try {
    const { email, password } = _;
    const response = await axios.post("/users/login", {
      email,
      password,
    });
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

export const register = createAsyncThunk(AUTH_REGISTER, async (_, thunkAPI) => {
  try {
    const { username, email, password } = _;
    const response = await axios.post("/users/signup", {
      username,
      email,
      password,
    });
    const data = response.data;
    console.log("Registration response data:", data, response);
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    return thunkAPI.rejectWithValue(
      error.message || "An error occurred during registration"
    );
  }
});
