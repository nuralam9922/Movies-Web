import React, { useState } from 'react';
import { FetchApi } from '../api/FetchApi';
import { useNavigate } from 'react-router-dom';

function Search() {
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	const handleSearch = async () => {
		if (search.trim() !== '') {
			navigate('/movies/' + search);
		}
	};

	const handleChange = (e) => {
		setSearch(e.target.value);
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<div className="w-full flex items-center justify-center mt-10">
			<input
				onChange={handleChange}
				value={search}
				type="text"
				className="h-10 w-[70%] lg:w-[60%] lg:h-10 text-black duration-300 border-2 border-transparent focus:border-blue-300 shadow-md indent-3 outline-none rounded-l-md text-left text-sm md:text-md"
				placeholder="Search Your Favorite Movies.."
				onKeyPress={handleChange}
			/>
			<button onClick={handleSearch} className="h-10 lg:h-10 px-6 bg-blue-400 hover:bg-blue-300 rounded-r-md text-white">
				Search{' '}
				<span>
					<i className="fa fa-search"></i>
				</span>
			</button>
		</div>
	);
}

export default Search;
