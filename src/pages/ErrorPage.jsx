// ErrorPage.js
import React from 'react';

const ErrorPage = () => {
	return (
		<div className="flex h-screen flex-col items-center justify-center  text-white">
			<h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
			<p className="text-lg">Please try again later.</p>
		</div>
	);
};

export default ErrorPage;
