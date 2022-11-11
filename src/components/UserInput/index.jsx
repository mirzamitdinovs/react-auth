import React, { useContext } from 'react';
import userContext from '../../contexts/UserContext';

const UserInput = () => {
	const { updateUserName } = useContext(userContext);
	const handleChange = (e) => {
		updateUserName(e.target.value);
	};
	return (
		<div>
			<input type={'text'} onChange={handleChange} />
		</div>
	);
};

export default UserInput;
