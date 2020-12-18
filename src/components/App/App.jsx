import React from 'react';
import CommandBar from '../CommandBar';
import ExpensesList from '../ExpensesList';
import Total from '../Total';
import ErrorMessage from '../ErrorMessage';
import './App.css';

const App = () => {
  return (
    <div className="container pt-5 pb-5">
      <div className="mb-3">
        <CommandBar />
      </div>

      <div>
        <ExpensesList />
      </div>

      <div>
        <Total />
      </div>

      <div>
        <ErrorMessage />
      </div>
    </div>
  );
};

export default App;
