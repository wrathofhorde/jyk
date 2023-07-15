import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../UI/Card";
import api from "../../common/api";
import url from "../../common/url";
import paths from "../../common/paths";
import useLoginContext from "../../contexts/login-context";

import styles from "./Login.module.css";

const Login = () => {
  const inputField = useRef();
  const navigate = useNavigate();
  const [, setIsLogin] = useLoginContext();
  const isClicked = useRef({ ok: false, cancel: false });
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setPasswordIsValid(event.target.value.length !== 0);
  };
  const submitHandler = async (event) => {
    if (isClicked.ok === true) return;
    isClicked.ok = true;

    event.preventDefault();
    if (passwordIsValid === false) {
      isClicked.ok = false;
      return;
    }

    const rsp = await api.post(url.settingsPin, {
      pinCode: enteredPassword,
    });

    if (rsp.resultCode === 0) {
      console.log("success");
      setIsLogin(true);
    } else {
      console.log("failure");
      navigate(paths.home);
    }

    isClicked.ok = false;
  };
  const cancelHandler = (event) => {
    if (isClicked.cancel === true) return;
    isClicked.cancel = true;

    event.preventDefault();
    navigate(paths.home);

    isClicked.cancel = false;
  };
  useEffect(() => {
    inputField.current.focus();
  }, []);

  return (
    <Card className={styles.login}>
      <header className={styles.header}>
        <h2>Password</h2>
      </header>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            ref={inputField}
          />
          <div>
            <button>OK</button>
            <button onClick={cancelHandler}>Cancel</button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default Login;
