// App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorPage from '../src/pages/ErrorPage'; // Import the ErrorPage component

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const Movies = React.lazy(() => import('./pages/Movies'));
const ViewAll = React.lazy(() => import('./pages/ViewAll'));
const MoviesDetails = React.lazy(() => import('./pages/MoviesDetails'));

function App() {
	return (
		<Router>
			<main className="bg-[#121212] max-w-[1280px] mx-auto">
				<Navbar />
				<Suspense
					fallback={
						<div className="animate-pulse  py-8 w-full mx-auto px-1.5 space-x-4 flex items-center justify-center">
							<div className="rounded-lg bg-gray-700 h-[30rem] lg:h-[20rem] w-full" />
						</div>
					}
				>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="movies/:quarry" element={<Movies />} />
						<Route path="browse-all/:id" element={<ViewAll />} />
						<Route path="movie/:id" element={<MoviesDetails />} />
						{/* Route for Error Page */}
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</Suspense>
			</main>
		</Router>
	);
}

export default App;
