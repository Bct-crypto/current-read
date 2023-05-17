import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await fetch("/api/books");
    const data = await res.json();

    if (data.error) {
      return;
    }
    setBooks(data.books);
  };
  return (
    <div className="max-w-3xl w-full grid gap-5">
      {books.map((book) => {
        return <BookCard key={book._id} {...book} />;
      })}
    </div>
  );
};

export default BookList;
