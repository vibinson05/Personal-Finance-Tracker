"use client";

import { useState, useEffect } from "react";
import "../components/styles/transaction.css";

export default function TransactionForm() {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    date: "",
    category: "",
    budgetAmount: "",
  });

  const [transactions, setTransactions] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const categories = ["Food", "Transport", "Shopping", "Bills", "Others"];

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      console.log("Fetched Transactions:", data);

      if (Array.isArray(data)) {
        setTransactions(data);
      } else {
        setTransactions([]);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setTransactions([]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.amount || !formData.description || !formData.date || !formData.category || !formData.budgetAmount) {
      alert("Please fill all fields.");
      return;
    }

    try {
      if (editingId) {
        await fetch("/api/transactions", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingId, ...formData }),
        });
        setEditingId(null);
      } else {
        await fetch("/api/transactions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      setFormData({ amount: "", description: "", date: "", category: "", budgetAmount: "" });
      fetchTransactions();
    } catch (error) {
      console.error("Error submitting transaction:", error);
    }
  };

  const handleEdit = (transaction) => {
    setFormData({
      amount: transaction.amount,
      description: transaction.description,
      date: transaction.date.split("T")[0],
      category: transaction.category,
      budgetAmount: transaction.budgetAmount,
    });
    setEditingId(transaction.id);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch("/api/transactions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const result = await res.json();
      if (res.ok) {
        alert("Transaction deleted successfully");
        fetchTransactions();
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Delete Request Error:", error);
    }
  };

  return (
    <div className="transaction-container">
    
      <div className="transaction-card">
        <h2>{editingId ? "Edit Transaction" : "Add Transaction"}</h2>
        <form onSubmit={handleSubmit}>
          <label>Amount:</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />

          <label>Description:</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />

          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />

          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>

          <label>Budget:</label>
          <input type="number" name="budgetAmount" value={formData.budgetAmount} onChange={handleChange} required />

          <button type="submit">{editingId ? "Update" : "Add"} Transaction</button>
        </form>
      </div>

      <div className="transaction-list">
        <h2>Transaction List</h2>
        {transactions.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Category</th>
                <th>Budget</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date.split("T")[0]}</td>
                  <td>₹{transaction.amount}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.category}</td>
                  <td>₹{transaction.budgetAmount}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(transaction)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(transaction.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No transactions found</p>
        )}
      </div>
      
    </div>
  );
}
