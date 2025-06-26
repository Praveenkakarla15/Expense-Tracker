import { useState } from "react";

export default function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    onAddExpense({ id: Date.now(), description, amount });
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow mt-4 space-y-2">
      <input
        type="text"
        placeholder="Description"
        className="w-full p-2 border rounded text-sm sm:text-base"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="w-full p-2 border rounded text-sm sm:text-base"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 text-sm sm:text-base"
      >
        Add Expense
      </button>
    </form>
  );
}
