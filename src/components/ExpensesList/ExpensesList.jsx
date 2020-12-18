import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from '../ExpensesListItem';

function ExpensesList({ expenses }) {
  return (
    <section className="expenses-list mt-5">
      <ul className="list-group list-group-flush">
        {expenses.map(({ id, ...expense }) => {
          return <ExpensesListItem key={id} expense={expense} />;
        })}
      </ul>
    </section>
  );
}

const mapStateToProps = ({ expenses }) => {
  return {
    expenses,
  };
};

export default connect(mapStateToProps)(ExpensesList);
