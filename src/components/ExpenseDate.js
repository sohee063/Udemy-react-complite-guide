import React from "react";

const ExpenseDate = (data) => {
  const month = data.date.toLocaleString("en-KR", { month: "long" });
  const day = data.date.toLocaleString("en-KR", { day: "2-digit" });
  const year = data.date.getFullYear();

  return (
    <div>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
