import React, { useState } from 'react';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from "./components/Expenses/Expenses";
//import ExpenseItem from "./components/ExpenseItem";


const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: "100",
    date: new Date(2023, 1, 12),
  },
  { id: "e2", title: "New TV", amount: "500", date: new Date(2021, 2, 11) },
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
    date: new Date(2019, 2, 5),
  },
];

const App=() => {
  const [expenses,setExpenses]=useState(DummyExpenses);
  
    const addExpenseHandler=(expense)=>{
      setExpenses((previosExpenses)=>{
        return [expense, ...previosExpenses]

      })
    }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
