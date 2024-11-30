import Link from "next/link";

export default async function page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href={`/addExpense`}>
   
        <button>Add a new Expense</button>
      </Link>
      <Link href={`/addIncome`}>
   
   <button>Add a new Income</button>
 </Link>
 <Link href={`/expenses`}>
   
   <button>All expenses</button>
 </Link>
    </div>
  );
}
