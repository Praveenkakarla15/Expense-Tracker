import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses }) {
  return (
    <div className="space-y-2 mt-4">
      {expenses.length === 0 && <p className="text-gray-500">No expenses yet.</p>}
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
}
