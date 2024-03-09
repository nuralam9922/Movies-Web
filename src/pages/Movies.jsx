import { Link } from 'react-router-dom';

export default function Movies() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1 grid text-white min-h-[calc(100vh_-_theme(spacing.8))_1fr] gap-4 px-4 pb-4">
				<div className="max-w-6xl w-full grid gap-4">
					<div className="grid items-center gap-2">
						<h1 className="font-semibold text-lg md:text-2xl lg:text-3xl">Search results</h1>
					</div>
					<div className="flex flex-col gap-4">
						{Array(10)
							.fill()
							.map((_, i) => (
								<div className="flex flex-col gap-1.5">
									<Link
										className="flex justify-center items-center md:items-start md:text-left md:flex-row gap-4  transition-colors"
										// to={`/movies/${i + 1}`}
									>
										<img
											alt="Movie poster"
											className="aspect-poster object-cover rounded-md w-[80px] sm:w-[100px] md:w-[120px]"
											height="auto"
											src="https://via.placeholder.com/300"
										/>
										<div className="grid gap-1.5">
											<h2 className="font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl">Summer of Adventure</h2>
											<p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400">
												2022 · Family, Fantasy · 1h 52m
											</p>
											<p className="text-xs sm:text-sm md:text-base lg:text-lg">
												Join the kids as they uncover the secrets of the enchanted forest in this magical and heartwarming tale.
											</p>
										</div>
									</Link>
									<hr className="border-gray-200 dark:border-gray-800" />
								</div>
							))}
					</div>
					<div className="flex items-center justify-center">{/* <Pagination aria-label="Search results page" /> */}</div>
				</div>
			</main>
		</div>
	);
}
