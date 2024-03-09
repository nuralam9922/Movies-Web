import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="flex items-center justify-between p-4 border-b border-gray-800">
			{/* <MenuIcon className="text-white w-6 h-6" /> */}
			<Link to={'/'}>
				<h1 className="font-extrabold capitalize text-3xl text-white">
					Movies <span className="text-blue-400">Web</span>
				</h1>
			</Link>
			<div className="flex items-center justify-center">
				{/* search icon */}
				<i className="ri-notification-3-line  text-2xl cursor-pointer text-white mr-1"></i>
				<i className="ri-menu-line lg:hidden text-3xl cursor-pointer text-white"></i>
			</div>
		</nav>
	);
}

export default Navbar;
