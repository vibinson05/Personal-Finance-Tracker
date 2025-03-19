"use client";
import MonthlyExpensesChart from "@/components/monthly-expenses";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function MonthlyExpensesPage() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="container">
      <Sidebar isOpen={isSidebarOpen} />

      <div className={`content ${isSidebarOpen ? "shifted" : ""}`}>
       
        <MonthlyExpensesChart />
      </div>
    </div>
  );
}