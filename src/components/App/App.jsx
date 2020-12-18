import React from 'react';
import CommandBar from '../CommandBar';
import ExpensesList from '../ExpensesList';
import Total from '../Total';
import ErrorMessage from '../ErrorMessage';

const App = () => {
  return (
    <div className="container pt-5 pb-5">
      <div className="app__command-bar mb-3">
        <CommandBar />
      </div>

      <div className="app__expenses-list">
        <ExpensesList />
      </div>

      <div className="app__total">
        <Total />
      </div>

      <div className="app__error">
        <ErrorMessage />
      </div>
    </div>
  );
};

export default App;
