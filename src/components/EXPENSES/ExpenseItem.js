import React,{ useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    // console.log("Expense item evaluated by react");

    // const [title,setTitle] = useState(props.title)

    // const clickHandler = () => {
    //     setTitle("Updated!!!")
    //     console.log(title);
    // }
    // const [amount,setAmount] = useState(props.amount)

    // const clickExpenseHandler = () => {
    //     setAmount(100)
    //     console.log(amount);
    // }
    return (
        <Card  className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h2>{props.location}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button>
            <button onClick={clickExpenseHandler}>Change Expense</button> */}
        </Card>
    )
}

export default ExpenseItem;