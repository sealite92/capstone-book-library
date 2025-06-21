// import React from "react";

// import TotalExpense from "./TotalExpense";
// import ExpenseDetails from "./ExpenseDetails";
// import PieChart from "./PieChart";

// export default function Container({ expenses, monthlyExpenses }) {
//   return (
//     <div className="grid grid-cols-2 grid-rows-8 gap-4 p-4 h-screen ">
//       <TotalExpense />
//       <PieChart expenses={expenses} monthlyExpenses={monthlyExpenses} />
//       <ExpenseDetails expenses={expenses} />
//     </div>
//   );
// }

import React from "react";
import TotalExpense from "./TotalExpense";
import ExpenseDetails from "./ExpenseDetails";
import PieChart from "./PieChart";

export default function Container({ expenses, total, chartData }) {
  return (
    <div className="grid grid-cols-2 grid-rows-8 gap-4 p-4 h-screen ">
      <TotalExpense total={total} />
      <PieChart expenses={expenses} chartData={chartData} />
      <ExpenseDetails expenses={expenses} />
    </div>
  );
}
