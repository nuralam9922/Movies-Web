import React, { useContext, useState } from 'react';
import { MoviesContext } from '../context/MoviesProvider';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
				<div className="bg-zinc-500 backdrop-blur-md bg-opacity-50 rounded-md overflow-hidden" style={{ height: '300px', width: '200px' }}> 
					<LazyLoadImage
						alt={movie?.title}
						effect="blur"
						// className="rounded-md bg-[#f0f0f0] h-full"
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
						src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
					/>
				</div>
			</Link>
			<h3 className="text-lg text-white font-semibold w-52">{movie?.title}</h3>
			<p className="text-sm text-gray-400 w-40">{movie?.overview.slice(0, 50) + '...'}</p>
			<p className="text-sm text-gray-400">{movie?.release_date}</p>
			<p className="text-sm">{genresName?.[0]?.name}</p>
		</div>
	);
}

export default Cart;
