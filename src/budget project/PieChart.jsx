// import React from "react";
// import { Chart } from "react-google-charts";

// export default function PieChart({ expenses }) {
//   const categoryMap = (expenses || []).reduce((acc, item) => {
//     const category = item.category;
//     if (!acc[category]) {
//       acc[category] = 0;
//     }
//     acc[category] += item.amount;
//     return acc;
//   }, {});

//   const chartData = [["Category", "Amount"], ...Object.entries(categoryMap)];

//   return (
//     <div className="col-span-1 row-span-5 bg-white rounded-xl shadow p-6">
//       <h2 className="text-sm font-semibold mb-2 text-gray-500">
//         SPENDING BY CATEGORY
//       </h2>
//       <div className="w-full h-64">
//         <Chart
//           chartType="PieChart"
//           data={chartData}
//           options={{
//             title: "Spending by Category",
//             pieHole: 0.01,
//             legend: { position: "right" },
//           }}
//           width="100%"
//           height="100%"
//         />
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Chart } from "react-google-charts";

export default function PieChart({ chartData }) {
  return (
    <div className="col-span-1 row-span-5 bg-white rounded-xl shadow p-6">
      <h2 className="text-sm font-semibold mb-2 text-gray-500">
        SPENDING BY CATEGORY
      </h2>
      <div className="w-full h-64">
        <Chart
          chartType="PieChart"
          data={chartData}
          options={{
            title: "Spending by Category",
            pieHole: 0.01,
            legend: { position: "right" },
          }}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
