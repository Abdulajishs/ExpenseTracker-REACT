import React, { useState } from "react";

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter"
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}

    </Card>
  );
}

export default Expenses;