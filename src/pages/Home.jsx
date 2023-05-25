import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import IntroPost from '../components/IntroPost';
import GlobalApi from '../services/GlobalApi';
import Footer from '../components/Footer';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    GlobalApi.getBook()
      .then(response => {
        if (response.status === 200 && response.data) {
          const booksData = response.data.items; // Assuming the books are stored in the 'items' property
          setBooks(booksData);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleSearch = async (searchInput) => {
    try {
      const response = await GlobalApi.getBook(searchInput);
      if (response) {
        setBooks(response.items);
      }
    } catch (error) {
      console.error('Error searching for books:', error);
    }
  };

  return (
    <>
      <Header />
      <Search onSearch={handleSearch} BASE_URL={'https://www.googleapis.com/books/v1/'} />
      {books.length > 0 && <IntroPost books={books} />}

    </>
  );
}

export default Home;
