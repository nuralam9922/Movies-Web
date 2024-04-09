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
		window.scrollTo(0, 0);
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
				<div className="px-5">
					{/* Banner skeleton */}
					<div className="mx-auto w-full overflow-hidden rounded-md">
						<div className="animate-pulse py-8 space-y-8">
							<div className="bg-gray-700 h-[20rem] w-full mb-8 rounded-md" />
						</div>
					</div>

					{/* Home category skeleton */}
					<section className="w-full flex items-center justify-center  gap-3 p-4 mt-5 flex-wrap">
						{[...Array(10)].map((_, index) => (
							<div
								key={index}
								className="px-4 bg-gray-700 hover:shadow-lg flex-grow shadow-yellow-400 hover:scale-110 duration-100 cursor-pointer capitalize p-2  rounded-md text-white"
							>
								&nbsp;
							</div>
						))}
					</section>

					{/* Search skeleton */}
					<div className="w-full flex items-center justify-center mt-10">
						<input
							type="text"
							className="h-10 w-[70%] lg:w-[60%] lg:h-10 text-black duration-300 border-2 border-transparent focus:border-blue-300 shadow-md indent-3 outline-none rounded-l-md text-left text-sm md:text-md"
							placeholder="&nbsp;"
						/>
						<button className="h-10 lg:h-10 px-6 bg-blue-400 hover:bg-blue-300 rounded-r-md text-white">&nbsp;</button>
					</div>

					{/* Movies carousel section skeleton */}
					<section className="trendingTopic">
						<div className="w-full bg-[#4e4e4e9f] h-[1px] mt-10 mb-10" />
						<div className="flex justify-between items-center">
							<div className="text-xl font-bold capitalize w-1/3">&nbsp;</div>

							<div className="flex gap-4 items-center justify-center">
								<button className="bg-[#E50914] text-xs rounded-sm lg:text-xs px-10 py-1 md:px-4 md:py-2">&nbsp;</button>
								<div className="flex gap-2">
									<button className="bg-blue-400 active:bg-blue-700 text-xs rounded-sm lg:text-xs px-2 py-1 md:px-4 md:py-2">&nbsp;</button>
									<button className="bg-blue-400 active:bg-blue-700 text-xs rounded-sm lg:text-xs px-2 py-1 md:px-4 md:py-2">&nbsp;</button>
								</div>
							</div>
						</div>

						<div className="flex overflow-x-auto gap-5 snap-x mt-5">
							{[...Array(5)].map((_, index) => (
								<div key={index} className="animate-pulse flex-shrink-0 bg-gray-300 rounded-md h-96 w-64" />
							))}
						</div>
					</section>
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
					<section className="w-full grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
						{/* Actual Cart component */}
						{hindiMovies?.results.slice(0, 12).map((item, index) => (
							<Cart key={index + Math.random} movie={item} />
						))}
					</section>
					<Link to={'/browse-all/hi'} className="w-full flex items-center justify-center mt-6">
						<button className="bg-[#E50914] text-xs rounded-sm lg:text-xs px-2 py-1 md:px-4 md:py-2">View All</button>
					</Link>
					<hr className="my-8" />
					<h1 className="text-xl font-bold mb-4">Trending Bengali Movies</h1>
					<section className="w-full grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
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
