export const SLICE_NAME = "auth";

export const AUTH_SET_TOKEN = `${SLICE_NAME}/setToken`;
export const AUTH_LOGOUT = `${SLICE_NAME}/logout`;

export const AUTH_CURRENT = `${SLICE_NAME}/current`;
export const AUTH_CURRENT_PENDING = `${AUTH_CURRENT}/pending`;
export const AUTH_CURRENT_FULFILLED = `${AUTH_CURRENT}/fulfilled`;
export const AUTH_CURRENT_REJECTED = `${AUTH_CURRENT}/rejected`;

export const AUTH_LOGIN = `${SLICE_NAME}/login`;
export const AUTH_LOGIN_PENDING = `${AUTH_LOGIN}/pending`;
export const AUTH_LOGIN_FULFILLED = `${AUTH_LOGIN}/fulfilled`;
export const AUTH_LOGIN_REJECTED = `${AUTH_LOGIN}/rejected`;


export const AUTH_REGISTER = `${SLICE_NAME}/register`;
export const AUTH_REGISTER_PENDING = `${AUTH_REGISTER}/pending`;
export const AUTH_REGISTER_FULFILLED = `${AUTH_REGISTER}/fulfilled`;
export const AUTH_REGISTER_REJECTED = `${AUTH_REGISTER}/rejected`;
