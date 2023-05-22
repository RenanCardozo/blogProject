import React from 'react';
import banner from '../assets/Images/banner.png';
import { IoSearchOutline } from 'react-icons/io5';

function Search() {
	return (
		<div className="flex mt-8 justify-center flex-col px-[70px] md:px-[150px]">
			<img src={banner} alt="spicyBanner" className='rounded-2xl h-[35vh] w-2/3 mx-auto'/>
			<div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
				<IoSearchOutline className='text-[20px] text-gray-400' />
				<input type="text" placeholder='Search' className='outline-none ml-2' />
			</div>
		</div>
	);
}

export default Search;
