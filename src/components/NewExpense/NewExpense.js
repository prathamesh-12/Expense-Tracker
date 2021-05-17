import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddNewExpense }) => {

    const [isEdit, setIsEdit] = useState(false);

    const onSaveExpenseFormHandler = (expenseData) => {
        const savedExpenseData = {
            ...expenseData,
            id: Math.random().toString(),
        };
        onAddNewExpense(savedExpenseData);
        onCancelHandler();
    };

    const startEditingHandler = () => {
        setIsEdit(true);
    }

    const onCancelHandler = () => {
        setIsEdit(false);
    }

    return (
      <div className="new-expense">
        {!isEdit && (
          <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEdit && (
          <ExpenseForm
            onSaveExpenseFormHandler={onSaveExpenseFormHandler}
            onCancel={onCancelHandler}
          />
        )}
      </div>
    );
};

export default NewExpense;