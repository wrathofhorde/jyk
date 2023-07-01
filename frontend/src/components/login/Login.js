import { useState } from "react";

import styles from "./Login.module.css";

const Login = (props) => {
  const [enteredId, setEnteredId] = useState("");
  const [idIsValid, setIdIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const validateIdlHandler = () => {
    setEmailIsValid(enteredId.trim().length > 1);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 3);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredId}
            onChange={idChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
      </form>
    </Card>
  );
};

export default Login;
