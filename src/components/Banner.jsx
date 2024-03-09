export default function Banner() {
	return (
		<div className="relative w-full mt-10">
			<img
				alt="The Pale Blue Eye Movie Background"
				className="w-full h-auto object-left-top"
				height="550"
				src="https://lh3.googleusercontent.com/proxy/pJZrH2PcbqUe_QinreoSmI97Khuet-q8D_OcjJUT8OufaXBIoxUVx6ZYQPi27Z1ffPMv3D2c3sSQmAQwvOZgTVLPbpsjDxMpQW2Ly0giIbKXjVCxBZ6XXwS4HfSD2ePnDrTJO09GOUdhorZl55iw8cuZ67XENwGdRL-8p27P"
				style={{
					aspectRatio: '1052/550',
					objectFit: 'cover',
				}}
				width="1252"
			/>
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-black/90 to-transparent" />

			<div className="absolute bottom-4 left-4">
				<h1 className="text-white text-[clamp(1rem,7vw,10rem)] font-bold">NETFLIX</h1>
				<h2 className="text-white text-[clamp(0.3rem,3vw,5rem)] font-semibold">The Pale Blue Eye</h2>
				<button className="text-white bg-blue-400 md:py-2 md:px-6 p-1 px-3 text-[10px] md:text-base rounded-md cursor-pointer md:mt-5">
					Watch Tralier <i class="ri-play-circle-line"></i>
				</button>
				{/* <Button className="mt-4 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 shadow-lg shadow-red-500/50">Watch</Button> */}
			</div>
			<div className="absolute bottom-4  hidden right-4 md:flex items-center gap-5 text-xl justify-between">
				<div className="flex items-center justify-center gap-2">
					<i class="ri-bard-line   text-white cursor-pointer"></i>
					<p className="text-white  -mt-1 font-semibold">7.8</p>
				</div>
				<div className="flex items-center justify-center gap-2">
					<i class="ri-heart-add-line  text-white cursor-pointer"></i>
					<p className="text-white">10000</p>
				</div>
				<div className="flex items-center justify-center gap-2">
					<i class="ri-download-2-line  text-white cursor-pointer"></i>
					<p className="text-white ">10000+</p>
				</div>
			</div>
		</div>
	);
}
