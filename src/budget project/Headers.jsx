// import React from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// export default function Headers({ selectedMonth }) {
//   return (
//     <div className="flex items-center justify-between">
//       <p className=" font-medium">BUDGET DASHBOARD</p>
//       <div className="flex items-center justify-center">
//         <button className="p-4 rounded-md bg-gray-300 shadow-amber-200 cursor-pointer ml-8 mt-4 mr-8">
//           <FaArrowLeft />{" "}
//         </button>
//         <h1 className="text-[3rem]">{selectedMonth}</h1>
//         <button className="p-4 rounded-md bg-gray-300 shadow-amber-200 cursor-pointer ml-8 mt-4">
//           <FaArrowRight />{" "}
//         </button>
//       </div>
//       <p></p>
//     </div>
//   );
// }

import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Headers({ selectedMonth, setSelectedMonth }) {
  const navigate = useNavigate();

  const handleMonthChange = (direction) => {
    const date = new Date(selectedMonth);
    date.setMonth(date.getMonth() + direction);
    const formatted = date.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    setSelectedMonth(formatted);
  };

  return (
    <div className="flex items-center justify-between w-full p-4 ">
      <div>
        <p className="font-medium">BUDGET DASHBOARD</p>
        <button
          className=" text-gray-500  cursor-pointer hover:text-gray-800"
          onClick={() => navigate("/contactCard")}
        >
          {" "}
          Contact Card{" "}
        </button>
      </div>
      <div className="flex items-center justify-center w-[60%]">
        <button
          onClick={() => handleMonthChange(-1)}
          className="p-4 rounded-md bg-gray-300 ml-8 mt-4 mr-8 cursor-pointer"
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-[3rem] w-[400px]">{selectedMonth}</h1>
        <button
          onClick={() => handleMonthChange(1)}
          className="p-4 rounded-md bg-gray-300 ml-8 mt-4 cursor-pointer"
        >
          <FaArrowRight />
        </button>
      </div>
      <p></p>
    </div>
  );
}
