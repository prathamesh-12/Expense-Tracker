import './ExpenseDate.css'

const ExpenseDate = ({date}) => {
    return (
      <div className="expense-date">
        <div className="expense-date__month">{date.toLocaleString("en-US", { month: "long" })}</div>
        <div className="expense-date__day">{date.toLocaleString("en-US", { day: "2-digit" })}</div>
        <div className="expense-date__year">{date.toLocaleString("en-US", { year: "numeric" })}</div>
      </div>
    );
}

export default ExpenseDate;