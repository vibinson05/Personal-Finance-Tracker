"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TransactionForm from "@/components/TransactionForm";
import "@/components/styles/sidebar.css";

export default function TransactionsPage() {
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="container">
      <Sidebar isOpen={isSidebarOpen} />

      
      <div className={`content ${isSidebarOpen ? "shifted" : ""}`}>
        <h1>Transactions</h1>
        <TransactionForm />
      </div>
    </div>
  );
}
