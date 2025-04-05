import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/book/:bookId/*" element={<BookDetail />} />
      </Routes>
    </>
  );
}

export default App;
