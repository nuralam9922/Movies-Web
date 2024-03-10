import { useContext, useEffect, useRef, useState } from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../context/MoviesProvider';

function MoviesCaracolSection({ movieData, moviesType = 'movies' }) {
	const container = useRef(null);
	const { initialized } = useContext(MoviesContext);
	const [isLoading, setIsLoading] = useState(true); // State to track loading status
	useEffect(() => {
		setIsLoading(false);
	}, [initialized]);
	const handelScroll = (direction) => {
		if (direction === 'right') {
			container.current.scrollLeft += container.current.offsetWidth;
		} else {
			container.current.scrollLeft -= container.current.offsetWidth;
		}
	};
	return (
		<section className=" trendingTopic">
			<div className="w-full bg-[#4e4e4e9f] h-[1px] mt-10 mb-10" />
			<div className="flex justify-between items-center">
				<h2 className="text-xl font-bold capitalize w-1/3">{moviesType}</h2>

				<div className="flex gap-4 items-center justify-center">
					<Link to={`/browse-all/${movieData?.results?.slice(0, 1).map((item) => item.genre_ids[0])}`}>
						<button className="bg-[#E50914] text-xs rounded-sm lg:text-xs px-2 py-1 md:px-4 md:py-2">View All</button>
					</Link>

					<div className="flex gap-2">
						<button
							onClick={() => handelScroll('left')}
							className="bg-blue-400 active:bg-blue-700 text-xs rounded-sm lg:text-xs px-2 py-1 md:px-4 md:py-2"
						>
							<i className="ri-arrow-right-line"></i>
						</button>
						<button
							onClick={() => handelScroll('right')}
							className="bg-blue-400 active:bg-blue-700 text-xs rounded-sm lg:text-xs px-2 py-1 md:px-4 md:py-2"
						>
							<i className="ri-arrow-left-line"></i>
						</button>
					</div>
				</div>
			</div>

			{isLoading ? (
				// Loading skeleton
				<div className="flex overflow-x-auto gap-5 snap-x">
					{[...Array(5)].map((_, index) => (
						<div key={index} className="animate-pulse flex-shrink-0 bg-gray-300 rounded-md h-96 w-64" />
					))}
				</div>
			) : (
				// Movie cards
				<div ref={container} className="flex overflow-x-auto gap-5 snap-x">
					{movieData?.results?.map((movie) => (
						<Cart key={movie.id} movie={movie} />
					))}
				</div>
			)}
		</section>
	);
}

export default MoviesCaracolSection;
