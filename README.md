# 📊 Finance Tracker

A personal finance management solution to track your transactions, manage budgets, and analyze your spending.

## 🚀 Technologies Used
- ⚡ **Next.js**: React framework for building the app.
- 🎭 **Styled-components**: For styling the components.
- 🔘 **React Icons**: For using vector icons in the UI.
- 🗄️ **MySQL**: For storing transactions and budget data.


## 🔥 Features
- 💰 Track transactions.
- 📅 View monthly expenses.
- 📊 Compare budget vs actual spending.
- 📌 Category-wise analysis.
- 💡 Simple spending insights.
- 📱 Mobile responsive design with a clean user interface.

## 🛠 Installation

1. **Clone the repository**:

   git clone https://github.com/vibinson05/Personal-Finance-Tracker.git
  

2. **Navigate to the project folder**:
   
   cd finance-tracker
  

3. **Install dependencies**:
  
   npm install


4. **Set up environment variables**:
   Create a `.env.local` file in the root directory and configure the database connection with MySQL.

   Example:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=password
   DB_NAME=finance_tracker


5. **Run the development server**:
  
   npm run dev


6. **Open your browser and go to** [http://localhost:3000](http://localhost:3000)

## 🔗 API Endpoints
- 🔄 **GET** `/api/transactions`: Fetch all transactions from the database.
- ➕ **POST** `/api/transactions`: Add a new transaction to the database.
- ✏️ **PUT** `/api/transactions/{id}`: Update an existing transaction.
- ❌ **DELETE** `/api/transactions/{id}`: Delete a transaction from the database.
- 📉 **GET** `/api/monthly-expenses`: Fetch monthly expense data for the user.

## 🎨 UI Components
- 🏠 **Sidebar**: Navigation menu with links to different sections of the app.
  - 📜 Transactions
  - 📊 Monthly Expenses
  - 💸 Budget Comparison
  - 📂 Category-wise Analysis
- 📝 **Transaction List**: Displays a list of transactions with options to add, edit, or delete entries.
- 📈 **Budget Comparison**: Graphical comparison between the budgeted and actual spending.
- 🔍 **Insights**: Displays graphical insights into overall spending and budgeting.

## 🎨 Styles
- 🌍 **Global styles**: Applied using styled-components.
- 🎭 **Component-level styling**: Managed using Reacticon/UI for a seamless and responsive experience.

---
💡 **Developed by Vibinson Raj G** 🚀
