import React, { useReducer, useState } from 'react';

const values = [
	'7',
	'8',
	'9',
	'/',
	'4',
	'5',
	'6',
	'*',
	'1',
	'2',
	'3',
	'-',
	'0',
	'.',
	'%',
	'+',
];
const Counters = () => {
	const initialState = '';
	const reducer = (state, action) => {
		switch (action.type) {
			case 'click':
				return state + action.value;
			case 'clear':
				return state.toString().slice(0, -1);
			case 'calculate':
				return eval(state);
			default:
				return state;
		}
	};
	const [counter, dispatch] = useReducer(reducer, initialState);

	return (
		<div className='bg-gray-200 m-10 p-10'>
			<div className='grid grid-cols-6 mb-4'>
				<input
					type='text'
					value={counter}
					className='col-span-5 w-full p-5 rounded-tl-lg rounded-bl-lg bg-gray-50 border-0'
				/>
				<div
					onClick={() =>
						dispatch({
							type: 'clear',
						})
					}
					className='rounded-tr-lg rounded-br-lg cursor-pointer text-xl text-white bg-red-500 flex justify-center items-center'
				>
					Clear
				</div>
			</div>
			<div className='grid grid-cols-4 gap-4  '>
				{values.map((item, index) => (
					<div
						className='border-2 cursor-pointer border-gray-400 rounded-lg p-3 text-center'
						key={index}
						onClick={() =>
							dispatch({
								type: 'click',
								value: item,
							})
						}
					>
						{item}
					</div>
				))}
			</div>
			<div className='grid grid-cols-4 gap-4'>
				<div className=''></div>
				<div className=''></div>
				<div className=''></div>
				<div
					onClick={() =>
						dispatch({
							type: 'calculate',
						})
					}
					className='p-1 cursor-pointer rounded-lg mt-3 text-center text-white text-3xl bg-green-500'
				>
					=
				</div>
			</div>
		</div>
	);
};

export default Counters;
