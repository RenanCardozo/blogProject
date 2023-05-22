import React from 'react'
import logo from './../assets/Images/logo.png';
import { IoLogoTiktok } from 'react-icons/io5';


function Header() {
	return (
		<header className='bg-gray-900 text-white'>
			<div className='container mx-auto px-6 py-3 flex items-center justify-between'>
				<div className='flex items-center'>
					<img src={logo} alt="logo" className='w-20 h-12 mr-2' />
					<h1 className='text-2xl font-bold'>Readers <span className='text-red-500'>Thirst</span></h1>
				</div>
				<nav className='hidden md:block'>
					<ul className='flex space-x-4'>
						<li className='hover:text-red-500 cursor-pointer'>Home</li>
						<li className='hover:text-red-500 cursor-pointer'>Books</li>
						<li className='hover:text-red-500 cursor-pointer'>About Us</li>
						<li className='hover:text-red-500 cursor-pointer'>Contact Us</li>
					</ul>
				</nav>
				<button className='bg-red-500 rounded-full text-white py-2 px-4 flex items-center'>
					<span className='mr-2'>Subscribe</span>
					<IoLogoTiktok className='text-2xl' />
				</button>

			</div>
		</header>
	);
}


export default Header