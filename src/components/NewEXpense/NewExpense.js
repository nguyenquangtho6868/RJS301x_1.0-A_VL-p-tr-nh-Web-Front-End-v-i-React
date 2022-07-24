import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const showExpenseForm = () => {
    setIsEditing(true);
  };

  const cancelHandler = () => {
    setIsEditing(false);
  };
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={showExpenseForm}>Add new expenses</button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
