import { createSlice } from '@reduxjs/toolkit';
import {
	SLICE_NAME,
	CONTACTS_FETCH_PENDING,
	CONTACTS_FETCH_FULFILLED,
	CONTACTS_FETCH_REJECTED,
	CONTACTS_ADD_PENDING,
	CONTACTS_ADD_FULFILLED,
	CONTACTS_ADD_REJECTED,
	CONTACTS_DELETE_PENDING,
	CONTACTS_DELETE_REJECTED,
	CONTACTS_DELETE_FULFILLED,
} from './constants';

const initialState = {
	items: [],
	isLoading: false,
	error: null,
};

const slice = createSlice({
	name: SLICE_NAME,
	initialState: initialState,
	reducers: {
		resetContacts: state => {
			state.items = [];
			state.isLoading = false;
			state.error = null;
		},
	},
	extraReducers: builder => {
		builder.addCase(CONTACTS_FETCH_PENDING, state => {
			state.isLoading = true;
		});
		builder.addCase(CONTACTS_FETCH_FULFILLED, (state, action) => {
			state.isLoading = false;

			state.items = action.payload;
		});
		builder.addCase(CONTACTS_FETCH_REJECTED, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});

		// Add Contact
		builder.addCase(CONTACTS_ADD_PENDING, state => {
			state.isLoading = true;
		});
		builder.addCase(CONTACTS_ADD_FULFILLED, (state, action) => {
			state.isLoading = false;
			state.items.push(action.payload);
		});
		builder.addCase(CONTACTS_ADD_REJECTED, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});

		// Delete Contact
		builder.addCase(CONTACTS_DELETE_PENDING, state => {
			state.isLoading = true;
		});
		builder.addCase(CONTACTS_DELETE_FULFILLED, (state, action) => {
			state.isLoading = false;
			state.items = state.items.filter(
				item => item.id !== action.payload.id
			);
		});
		builder.addCase(CONTACTS_DELETE_REJECTED, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export default slice.reducer;
