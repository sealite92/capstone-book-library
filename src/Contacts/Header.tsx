import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <div className=" h-1 w-full mb-6 flex justify-between lg:flex-row"></div>
      <header className="mb-6 flex flex-col gap-3">
        <h1 className="text-4xl">Contact Book</h1>
        <p>Keep track of where your friends live</p>
      </header>
      <button
        className=" text-gray-500  cursor-pointer hover:text-gray-800"
        onClick={() => navigate("/")}
      >
        {" "}
        Budget Dashboard{" "}
      </button>
    </div>
  );
}
