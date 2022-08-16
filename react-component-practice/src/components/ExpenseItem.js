import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (data) => {
  return (
    <div>
      <ExpenseDate date={data.date} />
      <div>
        <h2>{data.title}</h2>
        <div>${data.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
