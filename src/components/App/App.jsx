import React from 'react';
import CommandBar from '../CommandBar';
import ExpensesList from '../ExpensesList';

const App = () => {
  return (
    <div className="container pt-5 pb-5">
      <div className="app__command-bar mb-3">
        <CommandBar />
      </div>

      <div className="app__expenses-list">
        <ExpensesList />
      </div>
    </div>
  );
};

export default App;
