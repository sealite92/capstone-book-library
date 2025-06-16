import React from "react";

import TotalExpense from "./TotalExpense";
import ExpenseDetails from "./ExpenseDetails";
import PieChart from "./PieChart";

export default function Container({ expensis }) {
  return (
    <div className="grid grid-cols-2 grid-rows-8 gap-4 p-4 h-screen ">
      <TotalExpense />
      <PieChart expensis={expensis} />
      <ExpenseDetails expensis={expensis} />
    </div>
  );
}
