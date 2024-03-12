import React, { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

// Import required Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MoviesContext } from '../context/MoviesProvider';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FetchApi } from '../api/FetchApi';
function Banner() {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const { trendingMoviesThisWeek } = useContext(MoviesContext);
	const [imageUrl, setImageUrl] = useState();
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};
	console.log(trendingMoviesThisWeek);
	useEffect(() => {
		(async () => {
			const response2 = await FetchApi(`https://api.themoviedb.org/3/movie/792307/images?api_key=be1953a7184916165a031846e35362e5`);
			console.log(response2.backdrops[0].file_path);
			setImageUrl(response2);
		})();
	}, []);
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
					// dynamicBullets: true,
				}}
				// navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
			>
				{trendingMoviesThisWeek?.results.slice(0, 10)?.map((item) => (
					<SwiperSlide key={item.id}>
						<div key={item.id} className="relative w-full mt-10">
							<div className=" w-full ob min-h-[40rem] md:min-h-[30rem] md:h-[35rem]">
								<Link to={`/movie/${item.id}`} className="w-full">
									<div className="w-full">
										<LazyLoadImage
											alt="Movie Poster"
											effect="blur"
											onError={(e) => {
												e.target.src = 'https://via.placeholder.com/1252x550'; // Fallback image
											}}
											loading="lazy"
											className=" object-cover aspect-square w-screen ob min-h-[40rem] md:min-h-[30rem] md:h-[35rem]"
											// src={`https://image.tmdb.org/t/p/w700/3mpgltEMgPf8zFtPnAWdDVN8ZT1.jpg`}
											src={item?.poster_path ? `https://image.tmdb.org/t/p/original${item?.backdrop_path}` : ''}
										/>
									</div>
								</Link>
							</div>
							<div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-black/90 to-transparent" />
							<div className="absolute bottom-4 left-4">
								<Link to={`/movie/${item.id}`}>
									<h1 className="text-white text-[clamp(3rem,7vw,10rem)] leading-[50px] font-bold">
										{item.original_title || 'Title not available'}
									</h1>
									<h2 className="text-white text-[clamp(1rem,3vw,5rem)] lg:mt-2 font-semibold">
										{item.overview ? item.overview.slice(0, 40) + '...' : 'Overview not available'}
									</h2>
								</Link>
								<button className="text-white bg-blue-400 mt-2 md:py-2 md:px-6 p-2 px-3 text-[15px] md:text-base rounded-md cursor-pointer md:mt-5">
									Watch Trailer <i className="ri-play-circle-line"></i>
								</button>
							</div>
							<div className="absolute bottom-4  right-4 md:flex items-center gap-5 text-xl justify-between">
								<div className="flex items-center justify-center gap-2">
									<Rating rating={item?.vote_average} />
								</div>
								<div className="md:flex items-center hidden justify-center gap-2">
									<i className="ri-heart-add-line text-white cursor-pointer"></i>
									<p className="text-white">10000</p>
								</div>
								<div className="md:flex items-center hidden justify-center gap-2">
									<i className="ri-download-2-line text-white cursor-pointer"></i>
									<p className="text-white">10000+</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default Banner;
