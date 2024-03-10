import React, { useContext, useState } from 'react';
import { MoviesContext } from '../context/MoviesProvider';
import { Link } from 'react-router-dom';

function Cart({ movie }) {
	const { genres } = useContext(MoviesContext);
	let [genresName, setGenresName] = useState(
		genres?.genres?.filter((item) => {
			return item.id === movie?.genre_ids[1] || item.id === movie?.genre_ids[0];
		})
	);

	return (
		<div className="space-y-2 flex-shrink-0 text-white duration-200 snap-start py-5">
			<Link to={`/movie/${movie?.id}`}>
				<img
					src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
					alt={movie?.title}
					className="rounded-md hover:scale-105 duration-300 cursor-pointer"
					height="300"
					width="200"
					loading="lazy"
					style={{
						aspectRatio: '200/300',
						objectFit: 'cover',
						backgroundColor: '#f0f0f0', // Set background color while loading
					}}
					onError={(e) => {
						e.target.src = 'https://via.placeholder.com/300';
					}} // Use placeholder image on error
				/>
			</Link>
			<h3 className="text-lg text-white font-semibold w-52">{movie?.title}</h3>
			<p className="text-sm text-gray-400 w-40">{movie?.overview.slice(0, 50) + '...'}</p>
			<p className="text-sm text-gray-400">{movie?.release_date}</p>
			<p className="text-sm">{genresName?.[0]?.name}</p>
		</div>
	);
}

export default Cart;
