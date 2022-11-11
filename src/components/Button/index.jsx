import React, { memo } from 'react';

const Button = ({ title, func }) => {
	console.log('button ' + title);
	return <div onClick={func}>{title}</div>;
};

export default memo(Button);
