import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MoviesContextProvider } from './context/MoviesProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MoviesContextProvider>
			<App />
		</MoviesContextProvider>
	</React.StrictMode>
);
