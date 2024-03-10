import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FetchApi } from '../api/FetchApi';

export default function Movies() {
	const { quarry } = useParams();
	const [searchMovies, setSearchMovies] = useState([]);
	const [genres, setGenres] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
		const fetchData = async () => {
			try {
				const [searchResponse, genresResponse] = await Promise.all([
					FetchApi(`https://api.themoviedb.org/3/search/movie?api_key=be1953a7184916165a031846e35362e5&query=${quarry}`),
					FetchApi('https://api.themoviedb.org/3/genre/movie/list?api_key=be1953a7184916165a031846e35362e5'),
				]);
				setSearchMovies(searchResponse?.results || []);
				setGenres(genresResponse?.genres || []);
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setLoading(false); // Set loading to false after API call completes
			}
		};

		fetchData();
	}, [quarry]);

	const renderSkeleton = () => (
		// Render skeleton UI while loading
		<div className="flex flex-col gap-4 justify-start">
			<div className="flex flex-row gap-1.5">
				<div className="w-[140px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[200px] 2xl:w-[250px] min-h-52 bg-gray-300 dark:bg-gray-700 rounded-md shadow border-2 transition-colors duration-200 ease-in-out cursor-pointer" />
				<div className="ml-3 flex-1">
					<div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse mb-1.5" />
					<div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
					<div className="h-6 mt-10 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
				</div>
			</div>
			<div className="flex flex-row gap-1.5">
				<div className="w-[140px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[200px] 2xl:w-[250px] min-h-52 bg-gray-300 dark:bg-gray-700 rounded-md shadow border-2 transition-colors duration-200 ease-in-out cursor-pointer" />
				<div className="ml-3 flex-1">
					<div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse mb-1.5" />
					<div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
					<div className="h-6 mt-10 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
				</div>
			</div>
			<div className="flex flex-row gap-1.5">
				<div className="w-[140px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[200px] 2xl:w-[250px] min-h-52 bg-gray-300 dark:bg-gray-700 rounded-md shadow border-2 transition-colors duration-200 ease-in-out cursor-pointer" />
				<div className="ml-3 flex-1">
					<div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse mb-1.5" />
					<div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
					<div className="h-6 mt-10 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
				</div>
			</div>
			<hr className="border-gray-200 dark:border-gray-800" />
		</div>
	);

	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1 grid text-white min-h-[calc(100vh - _theme(spacing.8))_1fr] gap-4 px-4 pb-4">
				<h1 className="font-semibold text-lg md:text-2xl lg:text-5xl">Search results...</h1>
				<div className="max-w-6xl w-full grid gap-4">
					{loading ? (
						// Render skeleton UI while loading
						renderSkeleton()
					) : searchMovies.length > 0 ? (
						// Render search results if available
						<div className="flex flex-col gap-4">
							{searchMovies.map((movie, i) => (
								// Rendering each search result
								<div key={i} className="flex flex-row gap-1.5">
									<Link to={`/movie/${movie?.id}`} className="flex">
										<div className="w-[140px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[200px] 2xl:w-[250px] min-h-52">
											<img
												alt="Movie poster"
												className="aspect-poster object-cover rounded-md w-full h-full bg-gray-300 dark:bg-gray-700 shadow border-2 transition-colors duration-200 ease-in-out cursor-pointer"
												src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
												onError={(e) => {
													e.target.src = 'https://via.placeholder.com/300x450';
												}}
												loading="lazy"
											/>
										</div>
									</Link>
									<Link to={`/movie/${movie?.id}`}>
										<div className=" ml-3">
											<h2 className="font-semibold text-base sm:text-xl md:text-2xl lg:text-2xl">{movie?.original_title}</h2>
											<p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-80 mt-3">{movie?.overview.slice(0, 100) + '...'}</p>
											<p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 mt-5">
												2022 ·{' '}
												{genres
													.filter((item) => movie.genre_ids.includes(item.id))
													.map((item) => item.name)
													.join(', ')}
											</p>
										</div>
									</Link>

									<hr className="border-gray-200 dark:border-gray-800" />
								</div>
							))}
						</div>
					) : (
						// Display message when no search results are found
						<div className="flex flex-col h-screen items-center">
							<h1 className="text-[calc(100vh - _theme(spacing.8))]">Sorry no results found for "{quarry}" go back and try again</h1>
							<Link className="text-center p-2 px-20 rounded-full mt-5 bg-blue-400" to={'/'}>
								Back
							</Link>
						</div>
					)}
				</div>
			</main>
		</div>
	);
}
