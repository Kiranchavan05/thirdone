import React from 'react';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from "./components/Expenses/Expenses";
//import ExpenseItem from "./components/ExpenseItem";

const App=() => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "100",
      date: new Date(2023, 1, 12),
    },
    { id: "e2", title: "New TV", amount: "500", date: new Date(2023, 2, 11) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: "400",
      date: new Date(2023, 5, 2),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: "450",
      date: new Date(2023, 2, 5),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
