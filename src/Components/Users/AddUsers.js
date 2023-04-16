import React, { useState, useRef} from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModule from "./ErrorModule";
import Wrapper from "../Helpers/Wrapper";

const AddUsers = (props) => {

  const nameInputRef= useRef();
  const ageInputRef= useRef();
  const collegenameInputRef=useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCollegeName = collegenameInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a vaild name and age(non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invaild age",
        message: "Please enter a vaild age(>0).",
      });
      return;
    }
    props.onAddUsers(enteredName, enteredUserAge, enteredCollegeName);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    collegenameInputRef.current.value='';
  };


  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
          
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="Username">Username</label>
          <input
            id="Username"
            type="text"
            ref={nameInputRef}
          ></input>
          <label htmlFor="collegename">CollegeName</label>
          <input
            id="Collegename"
            type="text"
            ref={collegenameInputRef}
          ></input>
          <label htmlFor="age">Age(years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUsers;
