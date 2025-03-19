"use client";

import BudgetComparison from "@/components/BudgetComparison";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";


export default function BudgetComparisonPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="container">
      <Sidebar isOpen={isSidebarOpen} />
      

      <div className={`content ${isSidebarOpen ? "shifted" : ""}`}>
        <BudgetComparison />
      </div>
    </div>
  );
}

