import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setfilteresYaer] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setfilteresYaer(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let DieuKien = <p>Khong co gi</p>;
  if (filteredExpense.length > 0) {
    DieuKien = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFiter={filterChangeHandler}
      />
      {DieuKien}
    </Card>
  );
}
export default Expenses;
