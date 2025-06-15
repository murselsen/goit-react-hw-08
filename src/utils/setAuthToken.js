import axios from 'axios';

const setAuthToken = token => {
	// If the token is not provided, delete the Authorization header
	if (!token) {
		throw new Error('No token provided');
	}
	// If a token is provided, set it in the Authorization header
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default setAuthToken;
