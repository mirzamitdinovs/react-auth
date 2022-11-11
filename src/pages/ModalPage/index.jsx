import React from 'react';
import { useRef } from 'react';
import Modal from '../../components/Modal';

const ModalPage = () => {
	const ref = useRef(null);
	return (
		<div>
			<h1>Modal Page</h1>
			<Modal ref={ref} />
			<div onClick={() => ref.current.openModal()}>Open Modal</div>
			<p>this is modal page</p>
		</div>
	);
};

export default ModalPage;
