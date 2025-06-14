import { createAction } from "@reduxjs/toolkit";
import { AUTH_SET_TOKEN, AUTH_LOGOUT } from "./constants";

export const setToken = createAction(AUTH_SET_TOKEN);
export const logout = createAction(AUTH_LOGOUT);
