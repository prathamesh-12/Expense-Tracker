import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseFormHandler, onCancel }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };

    onSaveExpenseFormHandler(expenseData);
  };

  const onCancelExpenseForm = () => {
    onCancel();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={onCancelExpenseForm}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;