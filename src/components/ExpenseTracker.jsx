import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const total = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  return (
    <div className="max-w-md mx-auto mt-6">
      <ExpenseForm onAddExpense={addExpense} />
      <h2 className="text-xl font-semibold mt-4">Total: ₹{total.toFixed(2)}</h2>
      <ExpenseList expenses={expenses} />
    </div>
  );
}
