import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import IntroPost from '../components/IntroPost';
import Footer from '../components/Footer';
import GlobalApi from '../services/GlobalApi';

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
          console.log(booksData);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Header />
      <Search />
      {books.length > 0 ? <IntroPost books={books[0]} /> : null}
    </>
  );
}

export default Home;
