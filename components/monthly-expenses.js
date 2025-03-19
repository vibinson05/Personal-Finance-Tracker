"use client";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "../components/styles/monthlyexpense.css"

export default function MonthlyExpensesChart() {
    const [expensesData, setExpensesData] = useState([]);

    useEffect(() => {
      fetchExpenses();
    }, []);
  
    const fetchExpenses = async () => {
      try {
        const res = await fetch("/api/transactions");
        const data = await res.json();
  

        const monthlyData = data.reduce((acc, transaction) => {
          const month = new Date(transaction.date).toLocaleString("default", { month: "short" });
          acc[month] = (acc[month] || 0) + parseFloat(transaction.amount);
          return acc;
        }, {});
  
        const monthlyChartData = Object.keys(monthlyData).map((month) => ({
          month,
          expenses: monthlyData[month],
        }));
  
        setExpensesData(monthlyChartData);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
  
    return (
      <div className="chart-container">
        <h2>Monthly Expenses</h2>
  
 
        <div className="charts-wrapper">
    
          <div className="chart-box">
            <h3>Bar Chart (Month-wise)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expensesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="expenses" fill="#f39c12" name="Monthly Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>
  
     
          <div className="chart-box">
            <h3>Line Chart (Month-wise)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={expensesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="expenses" stroke="#ff5733" strokeWidth={2} name="Monthly Expenses" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }