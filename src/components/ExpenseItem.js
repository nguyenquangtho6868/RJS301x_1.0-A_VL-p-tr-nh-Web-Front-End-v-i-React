import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React, { useState } from "react";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Tholoi");
  };
  return (
    <Card className=" expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <div className="expense-item__price">{props.id}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}
export default ExpenseItem;
