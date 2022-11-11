import React, { useState } from 'react';
import { Link, useRoutes } from 'react-router-dom';
import { SIGN_UP } from '../../services';
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {
	const [values, setValues] = useState({
		name: '',
		phone: '',
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
		const res = await SIGN_UP(values);
		if (res) {
			navigate('/signin');
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
						value={values.name}
						name={'name'}
						onChange={handleChange}
						style={{ padding: '10px' }}
						type={'name'}
					/>
					<input
						value={values.phone}
						name={'phone'}
						onChange={handleChange}
						style={{ padding: '10px' }}
						type='phone'
					/>
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
					Already has account? <Link to='/signin'>login</Link>
				</div>
			</div>
		</div>
	);
};

export default SignupPage;
