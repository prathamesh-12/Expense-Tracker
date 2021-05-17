import './ExpenseFilter.css';

const ExpenseFilter = ({ selected, onYearChnage }) => {
  const yearOptions = [
    {
      id: 2022,
      value: 2022,
    },
    {
      id: 2021,
      value: 2021,
    },
    {
      id: 2020,
      value: 2020,
    },
    {
      id: 2019,
      value: 2019,
    },
  ];

  const renderedOptions = yearOptions.map((yr, i) => {
    return (
      <option id={yr.id} key={i+"_"}>
        {yr.value}
      </option>
    );
  });

  

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__contro">
        <label>Filter by Year: </label>
        <select value={selected} onChange={(e) => onYearChnage(e.target.value)}>
          {renderedOptions}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;