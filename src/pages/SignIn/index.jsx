import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SIGN_IN, SIGN_UP } from '../../services';

const SigninPage = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { value, name } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await SIGN_IN(values.email, values.password);
		if (res.token) {
			localStorage.setItem('token', res.token);
			localStorage.setItem('name', res.name);
			navigate('/user');
		}
	};
	return (
		<div
			style={{
				width: '100%',
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div>
				<form onSubmit={handleSubmit}>
					<input
						value={values.email}
						name={'email'}
						onChange={handleChange}
						style={{ padding: '10px' }}
						type={'email'}
					/>
					<input
						value={values.password}
						name={'password'}
						onChange={handleChange}
						style={{ padding: '10px' }}
						type='password'
					/>
					<input
						onChange={handleChange}
						style={{ padding: '10px' }}
						type='submit'
						value='SignUp'
					/>
				</form>
				<div>
					Don't have account? <Link to='/signup'>Register</Link>
				</div>
			</div>
		</div>
	);
};

export default SigninPage;
