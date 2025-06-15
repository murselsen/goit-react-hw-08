import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.goit.global'; // Set your API base URL here
import { createAsyncThunk } from '@reduxjs/toolkit';
import setAuthToken from '../../utils/setAuthToken';

import { AUTH_LOGIN, AUTH_REGISTER, AUTH_CURRENT } from './constants';

export const register = createAsyncThunk(AUTH_REGISTER, async (_, thunkAPI) => {
	try {
		const response = await axios.post('users/signup', _);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(
			error.message || 'An error occurred during registration'
		);
	}
});

export const login = createAsyncThunk(AUTH_LOGIN, async (_, thunkAPI) => {
	try {
		const response = await axios.post('users/login', _);
		const data = response.data;
		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(
			error.message || 'An error occurred during login'
		);
	}
});

export const current = createAsyncThunk(AUTH_CURRENT, async (_, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.token;
		if (!token) {
			return thunkAPI.rejectWithValue('No token found');
		}
		setAuthToken(token); // Set the token in the axios headers
		const response = await axios.get('users/current');
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(
			error.message || 'An error occurred during refresh'
		);
	}
});
