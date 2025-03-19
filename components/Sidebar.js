"use client";
import Link from "next/link";
import "../components/styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <h1 className="sidebar-title">Finance Tracker</h1>
        <ul>
          <li><Link href="/transactions">Transactions</Link></li>
          <li><Link href="/monthly-expenses">Monthly Expenses</Link></li>
          <li><Link href="/budgetcomparison">Budget Comparison</Link></li>
          <li><Link href="/Categorywise">Categorywise</Link></li>
        </ul>
      </nav>
    </div>
  );
}
