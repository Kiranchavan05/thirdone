import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModule from "./ErrorModule";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError]= useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
      setError({
        title:'Invalid Input',
        message:'Please enter a vaild name and age(non-empty values)'
      })
      return;
    }
    if(+enteredAge<1){
      setError({
        title:'Invaild age',
        message:'Please enter a vaild age(>0).'
      })
      return;
    }
    props.onAddUsers(enteredUsername,enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const changeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  
  const errorHandler=()=>{
    setError(null);
  }


  return (
    <div>
      {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="Username">Username</label>
        <input
          id="Username"
          type="text"
          value={enteredUsername}
          onChange={changeUsernameHandler}
        ></input>
        <label htmlFor="age">Age(years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={changeAgeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};
export default AddUsers;
