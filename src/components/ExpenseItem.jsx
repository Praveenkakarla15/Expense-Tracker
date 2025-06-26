export default function ExpenseItem({ expense }) {
  return (
    <div className="bg-white p-3 rounded shadow flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
      <span className="text-sm sm:text-base break-words">{expense.description}</span>
      <span className="font-semibold text-sm sm:text-base">₹{parseFloat(expense.amount).toFixed(2)}</span>
    </div>
  );
}
