import {useState} from 'react';

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import NewUser from './components/User/NewUser/NewUser';
import UserList from './components/User/UserList/UserList';

const _EXPENSES = [
  {
    id: "e1",
    title: "Cricket Kit",
    amount: 194.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "LG TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(_EXPENSES);
  const [users, setUsers] = useState([]);

  const onAddNewExpense = (newExpense) => {
    console.log(newExpense);
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];
    })
  }

  const onNewUserAdded = (user) => {
    setUsers(prevUsers => {
      return [...prevUsers, user]
    });
  }

  return (
    <div className="App">
      {/* <NewExpense onAddNewExpense={onAddNewExpense}/>
      <Expenses expenses={expenses}/> */}
      <NewUser onNewUserAdded={onNewUserAdded}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
