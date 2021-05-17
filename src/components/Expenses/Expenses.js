import {useState} from 'react';
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {

    const [year, setYear] = useState(new Date().getFullYear().toString());

    const filteredExpenses = expenses.filter((expense) =>
      expense.date.getFullYear().toString() === year
    );

    let renderedExpenseItem =
      filteredExpenses.length < 1 ? (
        <h4 className="expenses-list__fallback">No Expenses Found!</h4>
      ) : (
        filteredExpenses.map((exp, index) => {
          return (
            <ExpenseItem
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
              key={exp.id}
            />
          );
        })
      );
    
    

    const onYearChnage = (year) => {
        setYear(year);
    }

    return (
      <Card>
        <ExpenseFilter selected={year} onYearChnage={onYearChnage} />
        <ExpensesChart expenses={filteredExpenses} />
        {renderedExpenseItem}
      </Card>
    );
};

export default Expenses;