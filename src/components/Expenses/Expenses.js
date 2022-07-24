import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setfilteresYaer] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setfilteresYaer(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFiter={filterChangeHandler}
      />
      <ExpenseList items={filteredExpense} />
    </Card>
  );
}
export default Expenses;
