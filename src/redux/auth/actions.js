import { createAction } from "@reduxjs/toolkit";
import { AUTH_SET_TOKEN } from "./constants";

export const setToken = createAction(AUTH_SET_TOKEN);
