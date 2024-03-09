import React from 'react';

function Search() {
	return (
		<div className="w-full flex items-center justify-center mt-10">
			<input
				type="text"
				className="h-10 w-1/2 shadow-lg indent-3 outline-none rounded-l-2xl text-left text-sm md:text-md"
				placeholder="Search Your Favorite Movies.."
			/>
			<button className="h-10 px-6 bg-blue-400 rounded-r-2xl text-white">
				Search{' '}
				<span>
					<i className="fa fa-search"></i>
				</span>
			</button>
		</div>
	);
}

export default Search;
