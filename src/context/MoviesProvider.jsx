import { createContext, useContext, useState } from 'react';

export const MoviesContext = createContext(null);

export const MoviesContextProvider = (props) => {
	const [trendingMoviesThisWeek, setTrendingMoviesThisWeek] = useState([]);
	const [trendingMoviesOfDay, setTrendingMoviesOfDay] = useState([]);
	const [tvShows, setTvShows] = useState([]);
	const [hindiMovies, setHindiMovies] = useState([]);
	const [actionMovies, setActionMovies] = useState([]);
	const [initialized, setInitialized] = useState(false); 
	const [bengaliMovies, setBengaliMovies] = useState([]);


	const [genres, setGenres] = useState([]);

	return (
		<MoviesContext.Provider
			value={{
				bengaliMovies,
				setBengaliMovies,
				actionMovies,
				setActionMovies,
				tvShows,
				setTvShows,
				hindiMovies,
				setHindiMovies,
				trendingMoviesThisWeek,
				setTrendingMoviesThisWeek,
				genres,
				setGenres,
				trendingMoviesOfDay,
				setTrendingMoviesOfDay,
				initialized,
				setInitialized, 
			}}
		>
			{props.children}
		</MoviesContext.Provider>
	);
};
