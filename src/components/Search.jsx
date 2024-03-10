import React from 'react';

function Search() {
	return (
		<div className="w-full flex items-center justify-center mt-10">
			<input
				type="text"
				className="h-12 w-[70%] lg:w-[60%] lg:h-10  duration-300 border-2 border-transparent focus:border-blue-300 shadow-md indent-3 outline-none rounded-l-md text-left text-sm md:text-md"
				placeholder="Search Your Favorite Movies.."
			/>
			<button className="h-12 lg:h-10  px-6 bg-blue-400 hover:bg-blue-300 rounded-r-md text-white">
				Search{' '}
				<span>
					<i className="fa fa-search"></i>
				</span>
			</button>
		</div>
	);
}

export default Search;
