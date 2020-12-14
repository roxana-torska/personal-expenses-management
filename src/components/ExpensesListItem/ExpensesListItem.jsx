import React from 'react';

const ExpensesListItem = () => {
  return (
    <li className="expenses-list-item list-group-item d-flex align-items-center">
      <span className="expenses-list-item__date pr-3">2017-04-25</span>
      <span className="expenses-list-item__title px-3 flex-grow-1">Jogurt</span>
      <span className="expenses-list-item__value pl-3">2 USD</span>
    </li>
  );
};

export default ExpensesListItem;
