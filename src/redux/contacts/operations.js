import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { CONTACTS_ADD, CONTACTS_FETCH } from './constants';
import setAuthToken from '../../utils/setAuthToken';

export const fetchContacts = createAsyncThunk(
	CONTACTS_FETCH,
	async (_, thunkAPI) => {
		try {
			setAuthToken(thunkAPI.getState().auth.token);
			const response = await axios.get('contacts');
			console.log('Fetched contacts:', response.data);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const addContact = createAsyncThunk(
	CONTACTS_ADD,
	async (_, thunkAPI) => {
		try {
			setAuthToken(thunkAPI.getState().auth.token);

			const response = await axios.post('contacts', _);
			console.log('Added contact:', response.data);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	CONTACTS_ADD,
	async (_, thunkAPI) => {
		try {
			setAuthToken(thunkAPI.getState().auth.token);

			const response = await axios.delete(`contacts/${_.id}`);
			console.log('Deleted contact:', response.data);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
