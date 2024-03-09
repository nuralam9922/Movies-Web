import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MoviesDetails from './pages/MoviesDetails';
import Navbar from './components/Navbar';
import Movies from './pages/Movies';

function App() {
	return (
		<Router>
			<div className="bg-[#121212] max-w-[1280px] mx-auto">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="movies" element={<Movies />} />
					<Route path="movie/:id" element={<MoviesDetails />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
