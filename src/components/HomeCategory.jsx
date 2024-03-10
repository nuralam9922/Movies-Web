import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesProvider';

function HomeCategory() {
	const { setGenres, genres } = useContext(MoviesContext);
	// console.log(forEach((item) => console.log(item.name)));
	return (
		<section className="w-full flex items-center justify-center flex-wrap gap-3 p-4 mt-5">
			{genres?.genres?.map((item, index) => (
				<button
					key={index}
					className="px-4 bg-zinc-900 hover:shadow-lg shadow-yellow-400 hover:scale-110 duration-100 cursor-pointer capitalize p-2 flex-grow rounded-md text-white"
				>
					{item.name}
				</button>
			))}
		</section>
	);
}

export default HomeCategory;
