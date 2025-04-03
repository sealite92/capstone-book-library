import React from "react";
import Books from "./Books";

export default function HomePage() {
  return (
    <>
      <div className="bg-amber-50 p-4">
        <h1>Search your favorite books</h1>
        <Books />
      </div>
    </>
  );
}
