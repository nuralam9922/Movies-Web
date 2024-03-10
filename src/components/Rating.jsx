import React from 'react';

function Rating({ rating }) {
	return (
		<div className="relative">
			<div className="w-10 h-10  rounded-full flex items-center justify-center text-white text-xs">{rating?.toFixed(1)}</div>
			<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
				<circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="10" />
				<circle
					cx="50"
					cy="50"
					r="45"
					fill="none"
					stroke="#22c55e"
					strokeWidth="10"
					strokeLinecap="round"
					strokeDasharray="283"
					strokeDashoffset={283 - (rating?.toFixed(1) * 28.3).toFixed(1)}
					transform="rotate(-90 50 50)"
				/>
			</svg>
		</div>
	);
}

export default Rating;
