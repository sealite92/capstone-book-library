import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export default function BookDetails() {
  const { bookId } = useParams();
  const decodedKey = decodeURIComponent(bookId);

  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(`https://openlibrary.org${decodedKey}.json`);
      const data = await response.json();
      console.log(data);
      setBook(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  });

  if (loading) return <p>Loading book details...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!book) return <p>No book data found.</p>;

  return (
    <>
      <button
        onClick={() => navigate("/home")}
        className="p-4 rounded-md bg-gray-300 shadow-amber-200 cursor-pointer ml-8 mt-4"
      >
        <FaArrowLeft />
      </button>
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        {book.description && (
          <p className="mb-4 text-gray-700">
            {typeof book.description === "string"
              ? book.description
              : book.description.value}
          </p>
        )}
        {book.covers && book.covers.length > 0 && (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
            alt="Book Cover"
            className="w-[300px] mb-4 rounded shadow"
          />
        )}
        {book.subjects && (
          <div>
            {/* <h2>Authors: {book.authors}</h2> */}
            <h2 className="text-xl font-semibold mt-4 mb-2">Subjects</h2>
            <ul className="list-disc list-inside text-gray-600 flex ">
              {book.subjects.slice(0, 3).map((subject, index) => (
                <li className="" key={index}>
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
