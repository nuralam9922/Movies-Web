import { useParams } from 'react-router-dom';
import MoviesCaracolSection from '../components/MoviesCaracolSection';
import { useContext, useEffect, useState } from 'react';
import { FetchApi } from '../api/FetchApi';
import { MoviesContext } from '../context/MoviesProvider';
import Rating from '../components/Rating';

export default function MoviesDetails() {
	window.scrollTo(0, 0);
	const { id } = useParams();
	const { genres } = useContext(MoviesContext);
	const [movieDetails, setMovieDetails] = useState();
	const [movieType, setMovieType] = useState([]);
	const [images, setImages] = useState([]);
	const [video, setVideo] = useState([]);
	const [cast, setCast] = useState([]);
	const [similar, setSimilar] = useState([]);
	const [recommendations, setRecommendations] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const response = await FetchApi(`https://api.themoviedb.org/3/movie/${id}?api_key=be1953a7184916165a031846e35362e5`);
			const response2 = await FetchApi(`https://api.themoviedb.org/3/movie/${id}/images?api_key=be1953a7184916165a031846e35362e5`);
			const response3 = await FetchApi(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=be1953a7184916165a031846e35362e5`);
			const response4 = await FetchApi(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=be1953a7184916165a031846e35362e5`);
			const response5 = await FetchApi(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=be1953a7184916165a031846e35362e5`);
			const response6 = await FetchApi(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=be1953a7184916165a031846e35362e5`);
			setSimilar(response4);
			setRecommendations(response5);
			setCast(response3.cast);
			setImages(response2);
			setMovieDetails(response);
			setLoading(false);
		})();
	}, [id]);
	function convertRuntimeToDuration(runtime) {
		const hours = Math.floor(runtime / 60);
		const minutes = runtime % 60;
		return `${hours}h ${minutes}m`;
	}

	return (
		<div className="bg-[#0f0f0f] min-w-full min-h-screen text-white">
			{loading ? (
				<div className="container mx-auto px-6 py-8">
					{/* Movie Header Skeleton */}
					<div className="relative animate-pulse mb-8">
						<div className="rounded-lg bg-gray-700 h-96 lg:h-80 w-full" />
						<div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent rounded-lg">
							<div className="animate-pulse h-8 w-2/3 bg-gray-700 rounded-full mb-2"></div>
							<div className="animate-pulse h-4 w-1/2 bg-gray-700 rounded-full mb-2"></div>
							<div className="animate-pulse h-4 w-3/4 bg-gray-700 rounded-full"></div>
						</div>
					</div>

					{/* Movie Details Skeleton */}
					<div className="information bg-[#1c1c1c] p-6 rounded-lg shadow-lg mb-8">
						<h1 className="text-xl font-semibold text-white mb-4">Movie Details</h1>
						<div className="grid md:grid-cols-2 gap-4">
							<div>
								<div className="animate-pulse h-4 w-1/2 bg-gray-700 rounded-full mb-2"></div>
								<div className="animate-pulse h-4 w-3/4 bg-gray-700 rounded-full mb-2"></div>
								<div className="animate-pulse h-4 w-2/3 bg-gray-700 rounded-full mb-2"></div>
								<div className="animate-pulse h-4 w-1/2 bg-gray-700 rounded-full mb-2"></div>
							</div>
							<div>
								<div className="animate-pulse h-4 w-1/2 bg-gray-700 rounded-full mb-2"></div>
								<div className="animate-pulse h-4 w-3/4 bg-gray-700 rounded-full mb-2"></div>
								<div className="animate-pulse h-4 w-2/3 bg-gray-700 rounded-full mb-2"></div>
								<div className="animate-pulse h-4 w-1/2 bg-gray-700 rounded-full mb-2"></div>
							</div>
						</div>
					</div>

					{/* Story Line Skeleton */}
					<div className="mb-8 mt-10">
						<h3 className="text-xl font-semibold mb-2">Story Line</h3>
						<div className="animate-pulse h-16 w-full bg-gray-700 mb-2 rounded-lg"></div>
					</div>

					{/* Top Cast Skeleton */}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
						{[...Array(10)].map((_, index) => (
							<div key={index} className="bg-[#1E1E1E] p-4 rounded-lg flex flex-col items-center">
								<div className="animate-pulse h-16 w-16 rounded-full mb-2 bg-gray-700"></div>
								<div className="animate-pulse h-4 w-20 bg-gray-700 mb-2 rounded-full"></div>
								<div className="animate-pulse h-4 w-16 bg-gray-700 rounded-full"></div>
							</div>
						))}
					</div>

					{/* Images Skeleton */}
					<div className="w-full mt-10 mb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
						{[...Array(10)].map((_, index) => (
							<div key={index} className="w-full bg-slate-100 min-h-32 rounded-lg animate-pulse"></div>
						))}
					</div>
				</div>
			) : (
				<main className="container  mx-auto px-6 py-8">
					<section className="mb-8">
						<div className="relative ">
							<img
								loading="lazy"
								alt="The Last Human Season 1"
								className="object-left-top object-cover rounded-lg w-full min-h-[25rem] lg:max-h-[40rem]"
								src={`https://image.tmdb.org/t/p/original/${images?.posters?.slice(0, 1).map((x) => x?.file_path)}`}
							/>
							<div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent rounded-lg">
								<h2 className="text-lg md:text-2xl lg:text-4xl font-bold">{movieDetails?.original_title}</h2>
								<p className="text-xs md:text-sm lg:text-base text-gray-400">
									{movieDetails?.genres[0]?.name} - {movieDetails?.genres[1]?.name}
								</p>
								<div className="flex justify-between  mt-2 md:mt-4 ">
									<div className="flex gap-2">
										<button className="bg-[#E50914] text-xs rounded-sm md:text-base lg:text-lg px-2 py-1 md:px-4 md:py-2">
											Continue Watching
										</button>
										<button className="bg-blue-400 text-xs rounded-sm md:text-base lg:text-lg px-2 py-1 md:px-4 md:py-2">
											Add Watchlist
										</button>
									</div>
									<div className="relative">
										<Rating rating={movieDetails?.vote_average} />
									</div>
									{/* <div className="text-gray-400 flex items-center justify-start"></div> */}
								</div>
							</div>
						</div>
					</section>

					<section className="information bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
						<h1 className="text-xl font-semibold text-white mb-4">Movie Details</h1>
						<div className="grid md:grid-cols-2 gap-4">
							<div>
								<p className="text-gray-300 mb-2">
									<span className="font-semibold w-40 inline-block">Tagline</span> : {movieDetails?.tagline || 'N/A'}
								</p>
								<p className="text-gray-300 mb-2">
									<span className="font-semibold w-40 inline-block">Status</span> : {movieDetails?.status || 'N/A'}
								</p>
								<p className="text-gray-300 mb-2">
									<span className="font-semibold w-40 inline-block">Release Date</span> : {movieDetails?.release_date || 'N/A'}
								</p>
								<p className="text-gray-300 mb-2">
									<span className="font-semibold w-40 inline-block">Runtime</span> :{' '}
									{convertRuntimeToDuration(movieDetails?.runtime) || 'N/A'}
								</p>
							</div>
							<div className="">
								<p className="text-gray-300 mb-2">
									<span className="font-semibold inline-block  w-40">Budget</span> : ${movieDetails?.budget || 'N/A'}
								</p>
								<p className="text-gray-300 mb-2">
									<span className="font-semibold inline-block  w-40">Revenue</span> : ${movieDetails?.revenue || 'N/A'}
								</p>
								<p className="text-gray-300 mb-2">
									<span className="font-semibold inline-block  w-40">Popularity</span> : {movieDetails?.popularity || 'N/A'}
								</p>
								<p className="text-gray-300 mb-2">
									<span className="font-semibold inline-block  w-40">Vote Count</span> : {movieDetails?.vote_count || 'N/A'}
								</p>
							</div>
						</div>
					</section>

					<section className="mb-8 mt-10">
						<h3 className="text-xl font-semibold mb-2">Story Line</h3>
						<p className="text-gray-400">
							{movieDetails?.overview}...
							<button className="text-[#E50914]">More</button>
						</p>
					</section>

					<section className="mb-8">
						<h3 className="text-xl font-semibold mb-5">Top Cast</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
							{cast?.slice(0, 10).map((item, index) => (
								<div key={index} className="bg-[#1E1E1E] p-4 rounded-lg flex flex-col items-center">
									<img
										className="w-10 h-10 rounded-full mb-2 object-cover object-center"
										src={`https://image.tmdb.org/t/p/original${item?.profile_path}`}
										onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
										alt=""
										loading="lazy"
									/>
									<p className="font-semibold text-center">{item?.original_name}</p>
									<p className="text-sm text-gray-400 text-center"> {item?.character}</p>
								</div>
							))}
						</div>
					</section>
					<hr className="border-gray-800" />
					<h1 className="text-xl font-semibold mt-10 mb-10">Images</h1>
					<div className="w-full   mt-30 mb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
						{images?.backdrops?.slice(0, 10).map((item) => (
							<div key={item?.file_path} className="w-full bg-slate-100 min-h-32">
								<img
									loading="lazy"
									key={item?.file_path}
									src={`https://image.tmdb.org/t/p/original/${item?.file_path}`}
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
						))}
					</div>

					{similar.results.length > 0 && <MoviesCaracolSection movieData={similar} moviesType="similar Movies" hideViewAll="true" />}
					{recommendations.results.length > 0 && (
						<MoviesCaracolSection movieData={recommendations} moviesType="recommendations Movies" hideViewAll="true" />
					)}
				</main>
			)}
		</div>
	);
}
