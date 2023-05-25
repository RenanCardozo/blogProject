import React, { useState } from 'react';
import axios from 'axios';
import banner from '../assets/Images/banner.png';
import { IoSearchOutline } from 'react-icons/io5';
import IntroPost from './IntroPost'; // Import the IntroPost component



function Search({BASE_URL}) {
	const [searchInput, setSearchInput] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = async () => {
		try {
			const response = await axios.get(`${BASE_URL}volumes?q=${searchInput}`);
			setSearchResults(response.data.items);
		} catch (error) {
			console.error('Error searching for books:', error);
		}
	};

	return (
		<div className="flex mt-8 justify-center flex-col px-4 md:px-8 lg:px-16">
			<img
				src={banner}
				alt="spicyBanner"
				className="rounded-2xl h-[35vh] w-full md:w-2/3 mx-auto"
			/>
			<div className="bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-auto md:w-3/5 lg:w-1/2 xl:w-1/3 flex items-center">
				<label htmlFor="searchInput" className="mr-2">
					<IoSearchOutline className="text-lg text-gray-400" />
				</label>
				<input
					id="searchInput"
					type="text"
					placeholder="Search For Books"
					className="flex-grow outline-none text-base"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<button onClick={handleSearch}>Search</button>
			</div>

			{/* Display search results using IntroPost component */}
			{searchResults.map((book) => (
				<IntroPost key={book.id} books={book} />
			))}
		</div>
	);
}




export default Search;
