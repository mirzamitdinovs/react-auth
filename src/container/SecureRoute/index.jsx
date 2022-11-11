import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SecureRoute = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			navigate('/signin');
		}
		setLoading(false);
	}, []);

	if (loading) return <h1>Loading...</h1>;

	return <>{children}</>;
};
