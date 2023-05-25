import React, { useState, useEffect } from 'react';
import axios from 'axios';
import banner from '../assets/Images/banner.png';
import { IoSearchOutline } from 'react-icons/io5';
import IntroPost from './IntroPost'; // Import the IntroPost component
import Footer from './Footer';

function Search({ BASE_URL }) {
	const [searchInput, setSearchInput] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const handleSearch = async () => {
		try {
			const response = await axios.get(`${BASE_URL}volumes?q=${searchInput}`);
			setSearchResults(response.data.items);
			setCurrentPage(1); // Reset to the first page
		} catch (error) {
			console.error('Error searching for books:', error);
		}
	};

	// Calculate the total number of pages based on the search results and the number of items per page
	const totalPages = Math.ceil(searchResults.length / 5);

	// Get the current page's slice of search results
	const getPageResults = () => {
		const startIndex = (currentPage - 1) * 5;
		const endIndex = startIndex + 5;
		return searchResults.slice(startIndex, endIndex);
	};

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	return (
		<div className="flex flex-col items-center mt-8">
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
			{getPageResults().map((book) => (
				<IntroPost key={book.id} books={book} />
			))}

			{/* Pagination buttons */}
			{totalPages > 1 && (
				<div className="flex justify-center mt-4 mb-16">
					{currentPage > 1 && (
						<button onClick={handlePrevPage} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg">
							Previous
						</button>
					)}
					{currentPage < totalPages && (
						<button onClick={handleNextPage} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg">
							Next
						</button>
					)}
				</div>
			)}

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default Search;
