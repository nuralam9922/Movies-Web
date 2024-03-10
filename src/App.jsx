// App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
import ErrorPage from '../src/pages/ErrorPage'; // Import the ErrorPage component

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const Movies = React.lazy(() => import('./pages/Movies'));
const ViewAll = React.lazy(() => import('./pages/ViewAll'));
const MoviesDetails = React.lazy(() => import('./pages/MoviesDetails'));
const Navbar = React.lazy(() => import('./components/Navbar'));
function App() {
	return (
		<Router>
			<main className="bg-[#121212] max-w-[1280px] mx-auto">
				<Navbar />
				<Suspense
					fallback={
						<div className="flex justify-center items-center h-screen">
							<div className="flex space-x-2">
								<div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
								<div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
								<div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
							</div>
						</div>
					}
				>
					{/* <Falback /> */}
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
