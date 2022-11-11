import axios from 'axios';

const url = 'http://localhost:5000';

export const SIGN_IN = async (email, password) => {
	const res = await axios.post(`${url}/signin`, {
		email,
		password,
	});
	return res.data;
};

export const SIGN_UP = async (data) => {
	const res = await axios.post(`${url}/signup`, data);
	return res.data;
};
