// import React, { useState } from "react";
// import { data } from "./constants/data";

// import Headers from "./Headers";
// import Container from "./Container";

// export default function BudgetHome() {
//   const [expenses, setExpenses] = useState(data);
//   const [selectedMonth, setSelectedMonth] = useState("December 2024");

//   const monthlyExpenses = expenses.reduce((acc, item) => {
//     const month = item.date.slice(0, 7); // Extracting the month in YYYY-MM format
//     if (!acc[month]) {
//       acc[month] = [];
//     }
//     acc[month].push(item);
//     return acc;
//   }, {});
//   console.log(monthlyExpenses);

//   return (
//     <div className="bg-gradient-to-b from-purple-100 to-purple-50 min-h-180 m-auto p-10">
//       <Headers selectedMonth={selectedMonth} />
//       <Container expenses={expenses} monthlyExpenses={monthlyExpenses} />
//     </div>
//   );
// }

import React, { useState } from "react";
import { data } from "./constants/data";

import Headers from "./Headers";
import Container from "./Container";

export default function BudgetHome() {
  const [expenses, setExpenses] = useState(data);
  const [selectedMonth, setSelectedMonth] = useState("January 2025");

  const monthlyExpenses = expenses.reduce((acc, item) => {
    const month = item.date.slice(0, 7);
    if (!acc[month]) acc[month] = [];
    acc[month].push(item);
    return acc;
  }, {});

  const getMonthKey = (monthString) => {
    const date = new Date(monthString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
  };

  const selectedMonthKey = getMonthKey(selectedMonth);
  const selectedMonthExpenses = monthlyExpenses[selectedMonthKey] || [];

  const totalMonthlySpending = selectedMonthExpenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const categoryBreakdown = selectedMonthExpenses.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = 0;
    acc[item.category] += item.amount;
    return acc;
  }, {});

  const chartData = [
    ["Category", "Amount"],
    ...Object.entries(categoryBreakdown),
  ];

  return (
    <div className="bg-gradient-to-b from-purple-100 to-purple-50 min-h-180 m-auto p-10">
      <Headers
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <Container
        expenses={selectedMonthExpenses}
        total={totalMonthlySpending}
        chartData={chartData}
      />
    </div>
  );
}
