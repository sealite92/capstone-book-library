import React from "react";

// export default function TotalExpense() {
//   // return <div className="col-span-2 row-span-1 bg-white">TotalExpense</div>;
//   return (
//     <div className="bg-white rounded-xl shadow p-6 text-center col-span-2 row-span-1 text-gray-400 text-md font-bold flex justify-center items-center gap-4 align-middle">
//       <span>TOTAL SPENT THIS MONTH </span>
//       <span className="text-2xl text-black  ">$8,098.35</span>
//     </div>
//   );
// }

export default function TotalExpense({ total }) {
  return (
    <div className="col-span-2 row-span-1 bg-white rounded-xl shadow p-6 flex justify-center gap-4 align-middle items-center">
      <h2 className="text-lg font-semibold text-gray-500">
        TOTAL MONTHLY EXPENSE
      </h2>
      <h1 className="text-3xl font-bold text-purple-600">
        ₦{total.toFixed(2)}
      </h1>
    </div>
  );
}
