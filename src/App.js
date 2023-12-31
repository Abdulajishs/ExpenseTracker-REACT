import React, { useState } from "react";

import NewExpense from "./components/NEW EXPENSES/NewExpenses";
import Expenses from "./components/EXPENSES/Expenses";

const DUMMY_EXPENSES = [{
  id: "e1",
  title: "toilet paper",
  amount: 94.12,
  date: new Date(2023, 2, 27),
  LocationOfExpenditure: "Supermarket"
}, {
  id: "e2",
  title: "Car Insurance",
  amount: 294.67,
  date: new Date(2023, 3, 28),
  LocationOfExpenditure: "Insurance company"
}, {
  id: "e3",
  title: "New Desk(wooden)",
  amount: 450,
  date: new Date(2023, 5, 12),
  LocationOfExpenditure: "Furniture shop"
}
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;