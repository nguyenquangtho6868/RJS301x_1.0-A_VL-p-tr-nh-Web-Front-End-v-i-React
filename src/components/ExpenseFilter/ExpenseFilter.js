import "../ExpenseItem.css";
const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFiter(event.target.value);
  };
  return (
    <div className="expense-item">
      <label>Filter by year</label>
      <div className="expense-item__price">
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
