import { useState } from "react";
import NavBar from "../components/Navbar";

export default function Home({ user, setUser }) {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const available = income - totalExpenses;

  const handleAddExpense = (amount, description) => {
    setExpenses([...expenses, { id: Date.now(), amount, description }]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-200 via-blue-100 to-purple-200">
      <NavBar user={user} setUser={setUser} />
      <div className="p-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-100 p-4 rounded-xl shadow text-center">
            <h2 className="text-lg font-bold text-blue-700">Total Expenses</h2>
            <p className="text-2xl font-semibold mt-2">₹{totalExpenses.toFixed(2)}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-xl shadow text-center">
            <h2 className="text-lg font-bold text-green-700">Total Income</h2>
            <p className="text-2xl font-semibold mt-2">₹{income.toFixed(2)}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-xl shadow text-center">
            <h2 className="text-lg font-bold text-yellow-700">Available Amount</h2>
            <p className="text-2xl font-semibold mt-2">₹{available.toFixed(2)}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-2">Add your Income</h2>
            <input
              type="number"
              placeholder="Enter income amount"
              className="w-full p-2 border rounded mb-2"
              onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
            />
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-2">Add your Expenses</h2>
            <input
              type="text"
              placeholder="Enter description"
              className="w-full p-2 border rounded mb-2"
              id="descriptionInput"
            />
            <input
              type="number"
              placeholder="Enter expenses amount"
              className="w-full p-2 border rounded mb-2"
              id="amountInput"
            />
            <button
              onClick={() => {
                const amount = parseFloat(document.getElementById("amountInput").value);
                const desc = document.getElementById("descriptionInput").value;
                if (amount > 0 && desc) {
                  handleAddExpense(amount, desc);
                  document.getElementById("amountInput").value = "";
                  document.getElementById("descriptionInput").value = "";
                }
              }}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            >
              Add Expense
            </button>
          </div>
        </div>

        <div className="mt-6 bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-2">Expenses List</h2>
          {expenses.length === 0 ? (
            <p>No expenses added yet.</p>
          ) : (
            <ul className="space-y-2">
              {expenses.map((expense) => (
                <li key={expense.id} className="flex justify-between items-center border p-2 rounded">
                  <span>{expense.description} - ₹{expense.amount.toFixed(2)}</span>
                  <button
                    onClick={() => handleDeleteExpense(expense.id)}
                    className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-700"
                  > Remove </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}