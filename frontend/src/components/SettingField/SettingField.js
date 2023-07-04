import styles from "SettingField.module.css";

const SettingField = ({ label, inputId }) => {
  return (
    <div className={styles.area}>
      <label>{label}</label>
      <input type="text" id={inputId} />
    </div>
  );
};

export default SettingField;
