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
    <div className="max-w-md w-full mx-auto mt-6 px-4">
      <ExpenseForm onAddExpense={addExpense} />
      <h2 className="text-lg sm:text-xl font-semibold mt-4 text-center">
        Total: ₹{total.toFixed(2)}
      </h2>
      <ExpenseList expenses={expenses} />
    </div>
  );
}
