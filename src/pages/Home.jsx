import React from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import Search from '../components/Search';
import Banner from '../components/Banner';
function Home() {
	return (
		<div className="mx-auto w-full">
			<Search />
			<Banner />
			<div className="bg-[#121212] text-white">
				<section className="px-4 py-6">
					<h2 className="text-xl font-bold mb-4">Action</h2>
					<div className="flex snap-x  gap-3 overflow-x-auto py-3">
						{Array(30)
							.fill()
							.map((_, i) => (
								<Cart />
							))}
					</div>

					<h2 className="text-xl font-bold mb-4 mt-10">Comedy</h2>

					<div className="flex snap-x gap-3 overflow-x-auto ">
						<Cart />
						<Cart />
					</div>
					<h2 className="text-xl font-bold mb-4 mt-10">Horror</h2>

					<div className="flex snap-x gap-3 overflow-x-auto ">
						<Cart />
						<Cart />
					</div>
					<h2 className="text-xl font-bold mb-4 mt-10">Si-Fi</h2>

					<div className="flex snap-x gap-3 overflow-x-auto ">
						<Cart />
						<Cart />
					</div>
				</section>
			</div>
		</div>
	);
}

export default Home;
