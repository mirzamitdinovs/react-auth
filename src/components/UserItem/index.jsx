import React, { useContext } from 'react';
import userContext from '../../contexts/UserContext';

const UserItem = () => {
	const { user } = useContext(userContext);
	return <div>{user.name}</div>;
};

export default UserItem;
