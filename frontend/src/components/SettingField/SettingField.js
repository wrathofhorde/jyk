import { useEffect, useRef } from "react";

import styles from "./SettingField.module.css";

const SettingField = ({ label, inputId, inputState }) => {
  const inputField = useRef();
  const [inputValue, setinputValue] = inputState;
  const inputValueHandler = (event) => {
    setinputValue(event.target.value);
  };

  useEffect(() => {
    inputField.current.focus();
  }, []);

  return (
    <div className={styles.area}>
      <label htmlFor={inputId}>{label}</label>
      <input
        type="text"
        id={inputId}
        value={inputValue}
        onChange={inputValueHandler}
        ref={inputField}
      />
    </div>
  );
};

export default SettingField;
