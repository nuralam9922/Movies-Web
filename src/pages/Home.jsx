import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import Search from '../components/Search';
import Banner from '../components/Banner';
import HomeCategory from '../components/HomeCategory';
import MoviesCaracolSection from '../components/MoviesCaracolSection';
import { MoviesContext } from '../context/MoviesProvider';
import { FetchApi } from '../api/FetchApi';
import { Link } from 'react-router-dom';

function Home() {
	const {
		trendingMoviesThisWeek,
		setTrendingMoviesThisWeek,
		genres,
		setGenres,
		trendingMoviesOfDay,
		setTrendingMoviesOfDay,
		hindiMovies,
		setHindiMovies,
		tvShows,
		setTvShows,
		actionMovies,
		setActionMovies,
		initialized,
		setInitialized,
		bengaliMovies,
		setBengaliMovies,
	} = useContext(MoviesContext);

	useEffect(() => {
		if (!initialized) {
			fetchData();
		}
	}, [initialized]);

	const fetchData = async () => {
		try {
			const response1 = await FetchApi('https://api.themoviedb.org/3/trending/movie/week?api_key=be1953a7184916165a031846e35362e5');
			const response2 = await FetchApi('https://api.themoviedb.org/3/genre/movie/list?api_key=be1953a7184916165a031846e35362e5');
			const response3 = await FetchApi('https://api.themoviedb.org/3/trending/movie/day?api_key=be1953a7184916165a031846e35362e5');
			const response4 = await FetchApi(
				'https://api.themoviedb.org/3/discover/movie?api_key=be1953a7184916165a031846e35362e5&with_original_language=hi'
			);
			const response5 = await FetchApi('https://api.themoviedb.org/3/discover/tv?api_key=be1953a7184916165a031846e35362e5');
			const response6 = await FetchApi('https://api.themoviedb.org/3/discover/movie?api_key=be1953a7184916165a031846e35362e5&with_genres=28');
			const response7 = await FetchApi(
				'https://api.themoviedb.org/3/discover/movie?api_key=be1953a7184916165a031846e35362e5&with_original_language=bn'
			);
			setBengaliMovies(response7);
			setTrendingMoviesThisWeek(response1);
			setGenres(response2);
			setTrendingMoviesOfDay(response3);
			setHindiMovies(response4);
			setTvShows(response5);
			setActionMovies(response6);

			setInitialized(true);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	// console.log(bengaliMovies);
	return (
		<div className="mx-auto w-full overflow-hidden">
			{!initialized ? (
				<div className="animate-pulse py-8 space-y-8">
					{/* Banner skeleton */}
					<div className="bg-gray-700 h-[20rem] w-full mb-8" />

					{/* Home category skeleton */}
					<div className="bg-gray-700 h-16 w-full mb-8" />

					{/* Search skeleton */}
					<div className="bg-gray-700 h-12 w-full mb-8" />

					{/* Movies skeleton */}
					<div className="flex flex-wrap justify-center">
						{[...Array(4)].map((_, index) => (
							<div key={index} className="rounded-lg bg-gray-700 h-[30rem] lg:h-[20rem] w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-4 mb-8" />
						))}
					</div>
				</div>
			) : (
				<section className="text-white px-4">
					{/* Actual Banner component */}
					<Banner />

					{/* Actual Home Category component */}
					<HomeCategory />

					{/* Actual Search component */}
					<Search />

					{/* Actual Movies components */}
					<MoviesCaracolSection movieData={trendingMoviesThisWeek} moviesType="trending of the week" />
					<MoviesCaracolSection movieData={trendingMoviesOfDay} moviesType="trending of the day" />
					{/* <MoviesCaracolSection movieData={hindiMovies} moviesType="trending  hindi Movies" /> */}
					{/* make a semiler section for hindi movies but this in dependent section not any component custom*/}
					<hr className="my-8" />
					<h1 className="text-xl font-bold mb-4">Trending Hindi Movies</h1>
					<section className="w-full grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
						{/* Actual Cart component */}
						{hindiMovies?.results.slice(0, 10).map((item, index) => (
							<Cart key={index + Math.random} movie={item} />
						))}
					</section>
					<Link to={'/browse-all/hi'} className="w-full flex items-center justify-center mt-6">
						<button className="bg-[#E50914] text-xs rounded-sm lg:text-xs px-2 py-1 md:px-4 md:py-2">View All</button>
					</Link>
					<hr className="my-8" />
					<h1 className="text-xl font-bold mb-4">Trending Bengali Movies</h1>
					<section className="w-full grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
						{/* Actual Cart component */}
						{bengaliMovies?.results.slice(0, 10).map((item, index) => (
							<Cart key={index + Math.random} movie={item} />
						))}
					</section>
					<Link to={'/browse-all/bn'} className="w-full flex items-center justify-center mt-6">
						<button className="bg-[#E50914] text-xs rounded-sm lg:text-xs px-2 py-1 md:px-4 md:py-2">View All</button>
					</Link>

					<MoviesCaracolSection movieData={actionMovies} moviesType="Action Movies" />
				</section>
			)}
		</div>
	);
}

export default Home;
