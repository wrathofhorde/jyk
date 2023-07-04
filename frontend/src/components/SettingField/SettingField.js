import styles from "./SettingField.module.css";

const SettingField = ({ label, inputId, inputState }) => {
  const [inputValue, setinputValue] = inputState;
  const inputValueHandler = (event) => {
    setinputValue(event.target.value);
  };

  return (
    <div className={styles.area}>
      <label htmlFor={inputId}>{label}</label>
      <input
        type="text"
        id={inputId}
        value={inputValue}
        onChange={inputValueHandler}
      />
    </div>
  );
};

export default SettingField;
