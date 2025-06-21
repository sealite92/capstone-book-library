import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import BookDetail from "./components/BookDetail";
import BudgetHome from "./budget project/BudgetHome";
import ContactContainer from "./Contacts/ContactContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BudgetHome />} />
        <Route path="/contactCard" element={<ContactContainer />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/book/:bookId/*" element={<BookDetail />} />
      </Routes>
    </>
  );
}

export default App;
