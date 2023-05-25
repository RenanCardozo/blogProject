import axios from "axios";

const getBook = async (book) => {
	try {
		const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(book)}`);
		return response.data;
	} catch (error) {
		console.error('Error searching for book:', error);
		return null;
	}
};

export default {
	getBook
};

