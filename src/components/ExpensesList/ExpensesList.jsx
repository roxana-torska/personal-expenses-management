import React from 'react';
import ExpensesListItem from '../ExpensesListItem';

const ExpensesList = () => {
  return (
    <section className="expenses-list">
      <ul className="list-group list-group-flush">
        <ExpensesListItem />
        <ExpensesListItem />
        <ExpensesListItem />
      </ul>
    </section>
  );
};

export default ExpensesList;
