import React, { forwardRef, useImperativeHandle, useState } from 'react';
import './index.css';
const Modal = (props, ref) => {
	const [toggle, setToggle] = useState(false);

	const openModal = () => {
		setToggle(true);
	};

	const closeModal = () => {
		setToggle(false);
	};

	useImperativeHandle(ref, () => ({
		openModal,
	}));

	if (!toggle) return null;
	return (
		<div className='modal'>
			<div className='modal__container'>
				<div className='modal__header'>
					<p>Modal Popup</p>

					<svg
						onClick={closeModal}
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='header__icon'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</div>
				<div className='modal__body'>
					<div className='body__icon__wrapper'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='body__icon'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M4.5 12.75l6 6 9-13.5'
							/>
						</svg>
					</div>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s
					</p>
				</div>
				<div className='modal__footer'>
					<div onClick={closeModal} className='footer__button'>
						Close
					</div>
				</div>
			</div>
			<div onClick={closeModal} className='modal__bg'></div>
		</div>
	);
};

export default forwardRef(Modal);
