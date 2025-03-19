## Finance Tracker

A personal finance management solution to track your transactions, manage budgets, and analyze your spending.

## Technologies Used
- **Next.js**: React framework for building the app.
- **Shadcn/UI**: For UI components.
- **Styled-components**: For styling the components.
- **React Icons**: For using vector icons in the UI.
- **MySQL**: For storing transactions and budget data.
- **MongoDB (optional)**: For database management (if used).

## Features
- Track transactions.
- View monthly expenses.
- Compare budget vs actual spending.
- Category-wise analysis.
- Simple spending insights.
- Mobile responsive design with a clean user interface.

## Installation

1. Clone the repository:

git clone https://github.com/vibinson05/Personal-Finance-Tracker.git

2. Navigate to the project folder:

cd finance-tracker

3. Install dependencies:

npm install

4. Set up environment variables:

Create a .env.local file in the root directory and configure the database connection with MySQL.

Example:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=finance_tracker

5. Run the development server:

npm run dev

6. Open your browser and go to http://localhost:3000.

7. API Endpoints
   
GET /api/transactions: Fetch all transactions from the database.
POST /api/transactions: Add a new transaction to the database.
PUT /api/transactions/{id}: Update an existing transaction.
DELETE /api/transactions/{id}: Delete a transaction from the database.
GET /api/monthly-expenses: Fetch monthly expense data for the user.

8. UI Components
   
Sidebar: Navigation menu with links to different sections of the app.
Links: Transactions, Monthly Expenses, Budget Comparison, Categorywise.
Styled using Shadcn/UI and styled-components for a seamless and responsive experience.
Transaction List: Displays a list of transactions with options to add, edit, or delete entries.
Budget Comparison: Shows a graphical comparison between the budgeted and actual spending, helping users keep track of their finances.
Insights: Displays graphical insights into overall spending and budgeting.

9. Styles
Global styles are applied using styled-components and Shadcn/UI for component-level styling.

