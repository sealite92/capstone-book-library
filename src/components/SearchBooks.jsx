import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBooks({ onSearch }) {
  const [query, setQuery] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white max-w-fit h-7 flex items-center"
    >
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-[10px] w-[300px] text-[16px] border-none focus:outline-0"
      />
      <button
        type="submit"
        style={{ padding: "10px 15px", marginLeft: "10px" }}
        className="cursor-pointer"
      >
        <CiSearch />
      </button>
    </form>
  );
}
