import React from 'react';

function Cart({ type, imageUrl, time, tag, id }) {
	return (
		<div className="space-y-2 flex-shrink-0  duration-200 snap-start py-5">
			<img
				src="https://via.placeholder.com/300"
				onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
				alt="Convoy"
				className="rounded-md hover:scale-105 duration-300 cursor-pointer"
				height="300"
				style={{
					aspectRatio: '200/300',
					objectFit: 'cover',
				}}
				width="200"
			/>
			<h3 className="text-lg font-semibold">Convoy</h3>
			<p className="text-sm text-gray-400">(1978) - 1 hr 47 min</p>
			{/* <Badge variant="secondary">PG</Badge> */}
			<p className="text-sm">Comedy</p>
		</div>
	);
}

export default Cart;
