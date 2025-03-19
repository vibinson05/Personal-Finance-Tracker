"use client";

import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card } from "./ui/card";
import "./styles/categorywise.css"

export default function Categorywise() {
  const [expensesData, setExpensesData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [recentTransactions, setRecentTransactions] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const res = await fetch("/api/transactions");
      const data = await res.json();

      
      const categoryData = data.reduce((acc, transaction) => {
        const category = transaction.category;  
        acc[category] = (acc[category] || 0) + parseFloat(transaction.amount);
        return acc;
      }, {});

  
      const categoryChartData = Object.keys(categoryData).map((category) => ({
        name: category,
        value: categoryData[category],
      }));

     
      const recentTransactions = data.slice(0, 5);

      setCategoryData(categoryChartData);
      setExpensesData(data);
      setRecentTransactions(recentTransactions);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  const totalExpenses = expensesData.reduce(
    (acc, transaction) => acc + parseFloat(transaction.amount),
    0
  );


  const totalCategories = categoryData.length;
  const totalTransactions = expensesData.length;

  return (
    <div className="dashboard-container">
    

   
      <div className="summary-cards">
       
        <div className="summary-card">
          <h3>Total Expenses</h3>
          <p>{totalExpenses.toFixed(2)} USD</p>
        </div>

     
        <div className="summary-card">
          <h3>Total Categories</h3>
          <p>{totalCategories}</p>
        </div>

  
        <div className="summary-card">
          <h3>Total Transactions</h3>
          <p>{totalTransactions}</p>
        </div>
      </div>

      
      <div className="charts-and-transactions">
        
        <div className="pie-chart-container">
          <h3>Category-wise Expenses</h3>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                outerRadius={150}
                fill="#8884d8"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getRandomColor()} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      
        <div className="recent-transactions">
          <h3>Most Recent Transactions</h3>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount (USD)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.category}</td>
                  <td>{parseFloat(transaction.amount).toFixed(2)}</td>
                  <td>{new Date(transaction.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};