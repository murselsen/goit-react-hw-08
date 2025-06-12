import { createAction } from "@reduxjs/toolkit";
import { SET_TYPE, SET_VALUE } from "./constants";
export const setFilterType = createAction(SET_TYPE);
export const setFilterValue = createAction(SET_VALUE);
