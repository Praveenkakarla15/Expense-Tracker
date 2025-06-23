export default function ExpenseItem({ expense }) {
  return (
    <div className="bg-white p-3 rounded shadow flex justify-between items-center">
      <span>{expense.description}</span>
      <span className="font-semibold">₹{parseFloat(expense.amount).toFixed(2)}</span>
    </div>
  );
}
