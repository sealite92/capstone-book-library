import React, { useState } from "react";
import { data } from "./constants/data";

import Headers from "./Headers";
import Container from "./Container";

export default function BudgetHome() {
  const [expensis, setExpensis] = useState(data);

  return (
    <div className="bg-gradient-to-b from-purple-100 to-purple-50 min-h-180 m-auto p-10">
      <Headers />
      <Container expensis={expensis} />
    </div>
  );
}
