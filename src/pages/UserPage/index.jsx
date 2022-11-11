import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
	const navigate = useNavigate();
	const signout = () => {
		localStorage.removeItem('token');
		navigate('/');
	};
	return (
		<div>
			<h1>
				User Page: <span>{localStorage.getItem('name')}</span>
			</h1>
			<div>
				<button onClick={signout}>Sign out</button>
			</div>
		</div>
	);
};

export default UserPage;
