import { createContext, useState } from 'react';

const userContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({
		name: '',
	});

	const updateUserName = (name) => {
		setUser({
			...user,
			name: name,
		});
	};
	return (
		<userContext.Provider
			value={{
				user,
				updateUserName,
			}}
		>
			{children}
		</userContext.Provider>
	);
};

export default userContext;
