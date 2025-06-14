export const SLICE_NAME = "contacts";

export const CONTACTS_RESET = `${SLICE_NAME}/resetContacts`;

export const CONTACTS_FETCH = `${SLICE_NAME}/fetch`;
export const CONTACTS_FETCH_PENDING = `${CONTACTS_FETCH}/pending`;
export const CONTACTS_FETCH_FULFILLED = `${CONTACTS_FETCH}/fulfilled`;
export const CONTACTS_FETCH_REJECTED = `${CONTACTS_FETCH}/rejected`;

export const CONTACTS_ADD = `${SLICE_NAME}/add`;
export const CONTACTS_ADD_PENDING = `${CONTACTS_ADD}/pending`;
export const CONTACTS_ADD_FULFILLED = `${CONTACTS_ADD}/fulfilled`;
export const CONTACTS_ADD_REJECTED = `${CONTACTS_ADD}/rejected`;

export const CONTACTS_FETCH_BY_ID = `${SLICE_NAME}/fetchById`;
export const CONTACTS_FETCH_BY_ID_PENDING = `${CONTACTS_FETCH_BY_ID}/pending`;
export const CONTACTS_FETCH_BY_ID_FULFILLED = `${CONTACTS_FETCH_BY_ID}/fulfilled`;
export const CONTACTS_FETCH_BY_ID_REJECTED = `${CONTACTS_FETCH_BY_ID}/rejected`;

export const CONTACTS_DELETE = `${SLICE_NAME}/delete`;
export const CONTACTS_DELETE_PENDING = `${CONTACTS_DELETE}/pending`;
export const CONTACTS_DELETE_FULFILLED = `${CONTACTS_DELETE}/fulfilled`;
export const CONTACTS_DELETE_REJECTED = `${CONTACTS_DELETE}/rejected`;

export const CONTACTS_UPDATE = `${SLICE_NAME}/update`;
export const CONTACTS_UPDATE_PENDING = `${CONTACTS_UPDATE}/pending`;
export const CONTACTS_UPDATE_FULFILLED = `${CONTACTS_UPDATE}/fulfilled`;
export const CONTACTS_UPDATE_REJECTED = `${CONTACTS_UPDATE}/rejected`;
