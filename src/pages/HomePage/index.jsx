import React, { useCallback, useMemo, useState } from 'react';
import Button from '../../components/Button';
import Counters from '../../components/Conters';
import Title from '../../components/Title';
import UserInput from '../../components/UserInput';
import UsersList from '../../components/UsersList';
import { UserProvider } from '../../contexts/UserContext';

const HomePage = () => {
	const [toggle1, setToggle1] = useState(false);
	const [toggle2, setToggle2] = useState(false);
	const [name, setName] = useState('');

	const handleClick1 = useCallback(() => {
		console.log('button 1 clicked');
		setToggle1(!toggle1);
	}, [toggle1]);
	const handleClick2 = useCallback(() => {
		console.log('button 2 clicked');
		setToggle2(!toggle2);
	}, [toggle2]);

	const toggleTitle1 = useMemo(() => {
		return <Title title='Toggle 1' value={toggle1} />;
	}, [toggle1]);

	const toggleTitle2 = useMemo(() => {
		return (
			<div
				style={{
					color: toggle2 ? 'green' : 'red',
				}}
			>
				<Title title='Toggle 2' value={toggle2} />
			</div>
		);
	}, [toggle2]);

	return (
		<UserProvider>
			<h1>Home Page</h1>
			<Counters />
			{/* <input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<Button title='Button 1' func={handleClick1} />
			<Button title='Button 2' func={handleClick2} />
			{toggleTitle1}
			{toggleTitle2}
			<h1>{name}</h1>
			<UsersList /> */}
		</UserProvider>
	);
};

export default HomePage;
