"use client";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./styles/budgetcomparison.css";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";

export default function BudgetComparison() {
    const [categories, setCategories] = useState([]);
    const [actualSpending, setActualSpending] = useState([]);
    const [budgetData, setBudgetData] = useState([]);
    const [totalBudget, setTotalBudget] = useState(0);
    const [totalSpending, setTotalSpending] = useState(0);
    const [spendingInsights, setSpendingInsights] = useState([]);
    const [totalTransactions, setTotalTransactions] = useState(0); 
  
    useEffect(() => {
      fetchBudgetData();
    }, []);
  
    const fetchBudgetData = async () => {
      try {
        const res = await fetch("/api/transactions");
        const data = await res.json();
  
        
        const budgets = {
          Food: 500,
          Entertainment: 300,
          Transport: 200,
          Utilities: 150,
        };
  
        
        const actualSpendingData = data.reduce((acc, transaction) => {
          const category = transaction.category;
          acc[category] = (acc[category] || 0) + parseFloat(transaction.amount);
          return acc;
        }, {});
  

        const chartData = Object.keys(budgets).map((category) => ({
          category,
          budget: budgets[category],
          actual: actualSpendingData[category] || 0,
        }));
  
        setCategories(Object.keys(budgets));
        setBudgetData(chartData);
        setActualSpending(actualSpendingData);
  
      
        const totalBudget = Object.values(budgets).reduce((acc, val) => acc + val, 0);
        const totalSpending = Object.values(actualSpendingData).reduce((acc, val) => acc + val, 0);
  
        setTotalBudget(totalBudget);
        setTotalSpending(totalSpending);
        setTotalTransactions(data.length); 
  
        
        const insights = chartData.map((data) => ({
          category: data.category,
          status: data.actual > data.budget ? "Exceeding" : data.actual === data.budget ? "On Track" : "Under Budget",
        }));
  
        setSpendingInsights(insights);
  
      } catch (error) {
        console.error("Error fetching budget data:", error);
      }
    };
  
    return (
      <div className="budget-comparison-container">
        <h2>Budget vs Actual Comparison</h2>
  
        <div className="summary-cards">
          <Card className="summary-card">
            <h3>Total Transactions</h3>
            <p>{totalTransactions}</p>
          </Card>
  
          <Card className="summary-card">
            <h3>Total Budget</h3>
            <p>{totalBudget.toFixed(2)} USD</p>
          </Card>
  
          <Card className="summary-card">
            <h3>Total Spending</h3>
            <p>{totalSpending.toFixed(2)} USD</p>
          </Card>
        </div>
  
        <div className="graph-table-container">
        
          <div className="chart-container">
            <h3>Budget vs Actual Spending</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={budgetData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="budget" fill="#4CAF50" />
                <Bar dataKey="actual" fill="#FF5733" />
              </BarChart>
            </ResponsiveContainer>
          </div>
  
          <div className="transaction-table">
            <h3>Transaction Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {budgetData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.category}</td>
                    <td>{data.actual.toFixed(2)} USD</td>
                    <td>
                      {data.actual > data.budget ? (
                        <span className="over-budget">Over Budget</span>
                      ) : data.actual === data.budget ? (
                        <span className="on-track">On Track</span>
                      ) : (
                        <span className="under-budget">Under Budget</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }