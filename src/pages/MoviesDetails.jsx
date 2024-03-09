import Cart from '../components/Cart';

export default function MoviesDetails() {
	return (
		<div className="bg-[#0f0f0f] min-w-full text-white">
			<main className="container mx-auto px-6 py-8">
				<section className="mb-8">
					<div className="relative">
						<img
							alt="The Last Human Season 1"
							className="w-full h-52 md:h-72 lg:h-[36rem] md:w-[80rem] aspect-square object-left-top object-cover rounded-lg"
							src="https://lh3.googleusercontent.com/proxy/pJZrH2PcbqUe_QinreoSmI97Khuet-q8D_OcjJUT8OufaXBIoxUVx6ZYQPi27Z1ffPMv3D2c3sSQmAQwvOZgTVLPbpsjDxMpQW2Ly0giIbKXjVCxBZ6XXwS4HfSD2ePnDrTJO09GOUdhorZl55iw8cuZ67XENwGdRL-8p27P"
						/>
						<div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent rounded-lg">
							<h2 className="text-lg md:text-2xl lg:text-4xl font-bold">The Last Human Season 1</h2>
							<p className="text-xs md:text-sm lg:text-base text-gray-400">20 Episodes - 2024 - Fantasy - Actions</p>
							<div className="flex mt-2 md:mt-4 space-x-2">
								<button className="bg-[#E50914] text-xs rounded-sm md:text-base lg:text-lg px-2 py-1 md:px-4 md:py-2">
									Continue Watching
								</button>
								<button className="bg-blue-400 text-xs rounded-sm md:text-base lg:text-lg px-2 py-1 md:px-4 md:py-2">Add Watchlist</button>
							</div>
						</div>
					</div>
				</section>

				<section className="mb-8">
					<h3 className="text-xl font-semibold mb-2">Story Line</h3>
					<p className="text-gray-400">
						“The Last Human” is a science fiction movie based on the upcoming children's book of the same name by Lee Bacon. The story takes
						place after a robot apocalypse, where humans have been extinct for 30 years. A 12-year-old robot named XR_935 discovers a
						12-year-old human girl named Emma, who has spent her entire life hiding inside an underground bunker. They form an unlikely
						friendship and eventually embark on a dangerous voyage together...
						<button className="text-[#E50914]">More</button>
					</p>
				</section>

				<section className="mb-8">
					<h3 className="text-xl font-semibold mb-2">Top Cast</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
						{[...Array(10)].map((_, index) => (
							<div key={index} className="bg-[#1E1E1E] p-4 rounded-lg flex flex-col items-center">
								<img
									className="w-10 h-10 rounded-full mb-2"
									src="https://via.placeholder.com/300"
									onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
									alt=""
								/>
								<p className="font-semibold text-center">Dori Doreau</p>
								<p className="text-sm text-gray-400 text-center">Mike Torello</p>
							</div>
						))}
					</div>
				</section>
				<section className="mb-8 related">
					<div className="flex items-center justify-between">
						<h1 className="text-xl font-semibold mb-2"> Related</h1>
						<div className="flex items-center justify-between gap-2">
							<button className="bg-blue-400 text-xs rounded-sm md:text-base lg:text-lg px-2 py-1 md:px-4 md:py-2">View All</button>
						</div>
					</div>
					<div className="flex overflow-x-auto gap-5 snap-x">
						{[...Array(10)].map((_, index) => (
							<Cart key={index} />
						))}
					</div>
				</section>
				<section className="mb-8 trendingTopic">
					<div className="flex items-center justify-between">
						<h1 className="text-xl font-semibold mb-2"> Trending</h1>
						<div className="flex items-center justify-between gap-2">
							<button className="bg-blue-400 text-xs rounded-sm md:text-base lg:text-lg px-2 py-1 md:px-4 md:py-2">View All</button>
						</div>
					</div>

					<div className="flex overflow-x-auto gap-5 snap-x">
						{[...Array(10)].map((_, index) => (
							<Cart key={index} />
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
