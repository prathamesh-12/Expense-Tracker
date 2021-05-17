import { useState } from 'react';

import Card from '../Card/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './NewUser.module.css';

const NewUser = ({ onNewUserAdded }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const formSubmitHanlder = (evt) => {
    evt.preventDefault();

    // handle for inputs validations
    if (name.trim().length < 1 || age.trim().length < 1) {
      setError({
        title: 'Invalid Input',
        content: 'Mandatory Inputs, please enter some values to proceed further.'
      })
      return;
    }

    const user = {
      name,
      age,
      id: Math.random().toString(),
    };
    // clear controls
    onNewUserAdded(user);
    setName("");
    setAge("");
  };

  const onModalClose = () => {
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} content={error.content} onModalClick={onModalClose}/>}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHanlder}>
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            step="1"
            min="1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default NewUser; 