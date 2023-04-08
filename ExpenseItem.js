import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem=(props)=> {

  const [title, setTitle]=useState(props.title);
  console.log('ExpenseItem evaluated by React')
  const clickhandler=()=>{

    setTitle('updated!')
    //title='updated!';
    console.log(title)
  }

  const [amount,setAmount]=useState(props.amount);

  const handler=()=>{
    setAmount('100')
    //title='updated!';
    console.log(amount)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={handler}>Change Expense</button>
      </div>
      <button onClick={clickhandler}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
