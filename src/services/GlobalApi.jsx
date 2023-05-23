import axios from "axios";

const BASE_URL = 'https://www.googleapis.com/books/v1/';

const getBook = () => {
	return axios.get(BASE_URL + `volumes?q=credence`);
};

export default {
	getBook
};
