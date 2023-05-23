import React, { useState } from 'react';
import { IoLogoTiktok } from 'react-icons/io5';

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeModal = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className='bg-gray-900 text-white'>
			<div className='container mx-auto px-6 py-3 flex items-center justify-between'>
				<button className='text-white focus:outline-none md:hidden' onClick={toggleMenu}>
					<svg
						className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
					</svg>
				</button>
				<div className='flex items-center'>
					<h1 className='text-2xl font-bold'>
						Readers <span className='text-red-500'>Thirst</span>
					</h1>
				</div>
				<nav className={`hidden md:block ${isMenuOpen ? 'hidden' : 'block'}`}>
					<ul className='flex space-x-4'>
						<li className='hover:text-red-500 cursor-pointer'>Home</li>
						<li className='hover:text-red-500 cursor-pointer'>About Us</li>
						<li className='hover:text-red-500 cursor-pointer'>Contact Us</li>
					</ul>
				</nav>
				<div className='md:hidden'>
					{isMenuOpen && (
						<div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-900 bg-opacity-75'>
							<div className='absolute top-0 right-0 m-4'>
								<button className='text-white focus:outline-none' onClick={closeModal}>
									<svg
										className='h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
									</svg>
								</button>
							</div>
							<ul className='flex flex-col space-y-4 text-white text-center'>
								<li className='cursor-pointer' onClick={closeModal}>
									Home
								</li>
								<li className='cursor-pointer' onClick={closeModal}>
									About Us
								</li>
								<li className='cursor-pointer' onClick={closeModal}>
									Contact Us
								</li>
							</ul>
						</div>
					)}
				</div>
				<button className='bg-red-500 rounded-full text-white py-2 px-4 flex items-center'>
					<span className='mr-2'>Subscribe</span>
					<IoLogoTiktok className='text-2xl' />
				</button>
			</div>
		</header>
	);
}

export default Header;
