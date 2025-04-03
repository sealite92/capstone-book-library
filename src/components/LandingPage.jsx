import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className=" relative bg-[url('/Library.PNG')] bg-cover bg-center h-screen flex items-center justify-center  text-2xl">
      <div className="absolute inset-0 bg-[url('/Library.PNG')] bg-cover bg-center blur-xsl"></div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-white flex items-center justify-center flex-col gap-4">
        <h1>
          ...Read more than 1000 books including your favorites and best sellers
        </h1>
        <button
          onClick={() => navigate("/home")}
          className="bg-black hover:bg-gray-800 cursor-pointer p-2 text-sm rounded-md transition-colors duration-300 delay-50"
        >
          Get started
        </button>
      </div>
    </div>
  );
}
