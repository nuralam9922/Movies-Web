import React, { useEffect, useState, useCallback } from 'react';
import Cart from '../components/Cart';
import { useParams } from 'react-router-dom';
import { FetchApi } from '../api/FetchApi';
import InfiniteScroll from 'react-infinite-scroll-component';

export  function LoadingCart() {
	return (
		<div className="px-6">
			<div className="animate-pulse h-screen grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 overflow-hidden">
				{[...Array(10)].map((_, i) => (
					<div key={i} className=" text-white duration-200 snap-start">
						{/* Skeleton image */}
						<div className="rounded-md bg-gray-300 hover:scale-105 duration-300 cursor-pointer w-full h-72 aspect-w-2 aspect-h-3">
							{/* Placeholder for image */}
						</div>
						{/* Skeleton title */}
						<div className="h-6 bg-gray-300 rounded-md animate-pulse mt-2 w-full" />
						{/* Skeleton description */}
						<div className="h-4 bg-gray-300 rounded-md animate-pulse mt-1 w-full" />
						{/* Skeleton rating */}
						<div className="h-4 bg-gray-300 rounded-md animate-pulse mt-1 w-full" />
					</div>
				))}
			</div>
		</div>
	);
}

function ViewAll() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { id } = useParams();
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	const fetchData = useCallback(async () => {
		try {
			let url;
			if (id && /^[a-zA-Z]{2}$/.test(id)) {
				// If id is a language code
				url = `https://api.themoviedb.org/3/discover/movie?api_key=be1953a7184916165a031846e35362e5&with_original_language=${id}&page=${page}`;
			} else {
				// If id is a genre id
				url = `https://api.themoviedb.org/3/discover/movie?api_key=be1953a7184916165a031846e35362e5&with_genres=${id}&page=${page}`;
			}

			const response = await FetchApi(url);
			setMovies((prevMovies) => {
				const newMovies = response.results.filter((newMovie) => !prevMovies.some((prevMovie) => prevMovie.id === newMovie.id));
				return [...prevMovies, ...newMovies];
			});
			if (response.results.length === 0 || response.results.length < 20) {
				setHasMore(false); // Assuming 20 is the page size
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}, [id, page]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const fetchMoreData = useCallback(() => {
		setPage((prevPage) => prevPage + 1);
	}, []);

	return (
		<main className="container min-h-screen bg-[#141414] mx-auto text-white  px-4 overflow-hidden">
			<InfiniteScroll
				dataLength={movies.length}
				next={fetchMoreData}
				hasMore={hasMore}
				loader={<LoadingCart/>}
				endMessage={<p className="text-center text-4xl font-bold">No more movies to load</p>}
			>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 overflow-hidden">
					{movies.map((movie) => (
						<Cart key={movie.id} movie={movie} />
					))}
				</div>
			</InfiniteScroll>
		</main>
	);
}

export default ViewAll;
