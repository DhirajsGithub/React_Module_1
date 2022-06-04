import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// this is stateless component or dumb component or presentational component 
// component with useState are smart component or stateful component
const ExpenseItem = (props) => {
   // State is seperated on a per instance basis
   console.log("expense item evaluated by React")     // this will print 4 times
   // then every time we change the state by event in each ExpenseItem it will log only for that expense
   // why const if we are changing state value, well we are not actually changing state value
   // by calling setState the concrete valued is simply managed by the react somewhere else
   // we always get a brand new snap shot of the state
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
