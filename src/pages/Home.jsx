import { useState } from "react";
import NavBar from "../components/Navbar";

export default function Home({ user, setUser }) {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseDesc, setExpenseDesc] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const available = income - totalExpenses;

  const handleAddExpense = () => {
    const amount = parseFloat(expenseAmount);
    if (amount > 0 && expenseDesc.trim()) {
      setExpenses([...expenses, { id: Date.now(), amount, description: expenseDesc }]);
      setExpenseAmount("");
      setExpenseDesc("");
    }
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-200 via-blue-100 to-purple-200">
      <NavBar user={user} setUser={setUser} />
      <div className="p-4 max-w-6xl mx-auto space-y-6">
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-xl shadow text-center">
            <h2 className="text-base sm:text-lg font-bold text-blue-700">Total Expenses</h2>
            <p className="text-xl sm:text-2xl font-semibold mt-2">₹{totalExpenses.toFixed(2)}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-xl shadow text-center">
            <h2 className="text-base sm:text-lg font-bold text-green-700">Total Income</h2>
            <input
              type="number"
              placeholder="Enter income amount"
              className="w-full mt-2 p-2 border rounded text-center"
              value={income}
              onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
            />
          </div>
          <div className="bg-yellow-100 p-4 rounded-xl shadow text-center">
            <h2 className="text-base sm:text-lg font-bold text-yellow-700">Available Amount</h2>
            <p className="text-xl sm:text-2xl font-semibold mt-2">₹{available.toFixed(2)}</p>
          </div>
        </div>

        {/* Add Expense */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-2">Add Your Expenses</h2>
            <input
              type="text"
              placeholder="Enter description"
              className="w-full p-2 border rounded mb-2"
              value={expenseDesc}
              onChange={(e) => setExpenseDesc(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter expense amount"
              className="w-full p-2 border rounded mb-2"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
            />
            <button
              onClick={handleAddExpense}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            >
              Add Expense
            </button>
          </div>
        </div>

        {/* Expense List */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4">Expenses List</h2>
          {expenses.length === 0 ? (
            <p className="text-center">No expenses added yet.</p>
          ) : (
            <ul className="space-y-2">
              {expenses.map((expense) => (
                <li key={expense.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border p-2 rounded">
                  <span className="mb-2 sm:mb-0">{expense.description} - ₹{expense.amount.toFixed(2)}</span>
                  <button
                    onClick={() => handleDeleteExpense(expense.id)}
                    className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}
