import React from 'react';

const Title = ({ title, value }) => {
	console.log('title ' + title);
	return (
		<div>
			<h3>
				{title} value: {JSON.stringify(value)}
			</h3>
		</div>
	);
};

export default Title;
