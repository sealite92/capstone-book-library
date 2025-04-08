import React, { useEffect, useState } from "react";
import SearchBooks from "./SearchBooks";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchBooks = async (query = "react") => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await response.json();
      console.log(data);
      setBooks(data.docs.slice(0, 20));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <SearchBooks onSearch={fetchBooks} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 items-center justify-center gap-4 ">
        {books.map((book, index) => (
          <li
            onClick={() =>
              navigate(`/book/${encodeURIComponent(book.key)}`, {
                state: { book },
              })
            }
            key={index}
            className="bg-white p-6 rounded-xl flex flex-col justify-center cursor-pointer items-center gap-6 shadow-md w-[200px] h-[300px]"
          >
            <img
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : "https://via.placeholder.com/128x192?text=No+Cover"
              }
              style={{
                width: "128px",
                height: "192px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <div>
              <h1 className="text-[16px] text-[600]">{book.title}</h1>
              <h2 className="text-[10px]">{book.author_name.slice(0, 3)}</h2>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
