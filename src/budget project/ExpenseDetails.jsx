// import React, { useState } from "react";

// export default function ExpenseDetails({ expenses }) {
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 5;

//   const totalPages = Math.ceil(expenses.length / itemsPerPage);
//   const startIndex = (page - 1) * itemsPerPage;
//   const currentItems = expenses.slice(startIndex, startIndex + itemsPerPage);

//   const displayedPages = () => {
//     const maxVisible = 6;
//     let start = Math.max(1, page - Math.floor(maxVisible / 2));
//     let end = Math.min(totalPages, start + maxVisible - 1);

//     if (end - start < maxVisible - 1) {
//       start = Math.max(1, end - maxVisible + 1);
//     }

//     return Array.from({ length: end - start + 1 }, (_, i) => start + i);
//   };

//   return (
//     <div className="col-span-1 row-span-5 bg-white rounded-xl shadow p-6">
//       <h2 className="text-sm font-semibold mb-2 text-gray-500">
//         TRANSACTIONS THIS MONTH
//       </h2>
//       <table className="w-full text-left text-sm text-gray-700">
//         <thead>
//           <tr className="text-purple-700 font-semibold bg-gray-200 border-b-gray-400">
//             <th className="p-4">PAYEE</th>
//             <th className="p-4">DATE</th>
//             <th className="p-4">AMOUNT</th>
//             <th className="p-4">CATEGORY</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((items, index) => (
//             <tr key={index} className="border-gray-700 hover:bg-gray-50">
//               <>
//                 <td className="p-4">{items.payee}</td>
//                 <td className="p-4">{items.date}</td>
//                 <td className="p-4 ">${items.amount}</td>
//                 <td className="p-4">{items.category}</td>
//               </>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="flex justify-center mt-6 space-x-2">
//         {/* Page numbers */}
//         {displayedPages().map((p) => (
//           <button
//             key={p}
//             onClick={() => setPage(p)}
//             className={`px-3 py-1 rounded text-sm ${
//               page === p
//                 ? "bg-purple-200 text-purple-800 font-semibold"
//                 : "text-gray-600 hover:text-black"
//             }`}
//           >
//             {p}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function ExpenseDetails({ expenses }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const maxVisible = 6;

  // Reset page when month/expenses change
  useEffect(() => {
    setPage(1);
  }, [expenses]);

  const totalPages = Math.ceil(expenses.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = expenses.slice(startIndex, startIndex + itemsPerPage);

  const getVisiblePageNumbers = () => {
    const group = Math.floor((page - 1) / maxVisible); // Group of 6s
    const start = group * maxVisible + 1;
    const end = Math.min(start + maxVisible - 1, totalPages);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const goToNextGroup = () => {
    const nextGroupPage = Math.min(page + maxVisible, totalPages);
    setPage(nextGroupPage);
  };

  const goToPrevGroup = () => {
    const prevGroupPage = Math.max(page - maxVisible, 1);
    setPage(prevGroupPage);
  };

  return (
    <div className="col-span-1 row-span-5 bg-white rounded-xl shadow p-6">
      <h2 className="text-sm font-semibold mb-2 text-gray-500">
        TRANSACTIONS THIS MONTH
      </h2>

      {expenses.length === 0 ? (
        <p className="text-center text-gray-400">No transactions found.</p>
      ) : (
        <>
          <table className="w-full text-left text-sm text-gray-700">
            <thead>
              <tr className="text-purple-700 font-semibold bg-gray-200 border-b-gray-400">
                <th className="p-4">PAYEE</th>
                <th className="p-4">DATE</th>
                <th className="p-4">AMOUNT</th>
                <th className="p-4">CATEGORY</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="border-gray-700 hover:bg-gray-50">
                  <td className="p-4">{item.payee}</td>
                  <td className="p-4">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td className="p-4">
                    ₦
                    {item.amount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td className="p-4">{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6 space-x-2">
            {page > maxVisible && (
              <button
                onClick={goToPrevGroup}
                className="px-3 py-1 rounded text-sm bg-gray-200 hover:bg-gray-300"
              >
                &lt;
              </button>
            )}

            {getVisiblePageNumbers().map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-3 py-1 rounded text-sm ${
                  page === p
                    ? "bg-purple-200 text-purple-800 font-semibold"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {p}
              </button>
            ))}

            {page + maxVisible - 1 < totalPages && (
              <button
                onClick={goToNextGroup}
                className="px-3 py-1 rounded text-sm bg-gray-200 hover:bg-gray-300"
              >
                &gt;
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
