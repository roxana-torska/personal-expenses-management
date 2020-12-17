import React from 'react';

const ExpensesListItem = ({ expense }) => {
    const { date, value, currency, title } = expense;
  
    return (
      <li className="expenses-list-item list-group-item d-flex align-items-center">
      <span className="expenses-list-item__date pr-3">{date}</span>
      <span className="expenses-list-item__title px-3 flex-grow-1">{title}</span>
      <span className="expenses-list-item__value pl-3">{value} {currency}</span>
    </li>
  );
};

export default ExpensesListItem;
