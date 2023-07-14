import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import paths from "../common/paths";
import useLoginContext from "../contexts/login-context";
import SettingField from "../components/SettingField/SettingField";

import styles from "./SettingsForm.module.css";

const SettingsForm = () => {
  const navigate = useNavigate();
  const tableState = useState("");
  const [, setIsLogin] = useLoginContext();
  const isClicked = useRef({ ok: false, cancel: false });

  const okHandler = () => {
    if (isClicked.ok) return;
    isClicked.ok = true;

    const [tableName] = tableState;

    if (tableName.trim().length !== 0) {
      localStorage.setItem("table", tableName);
      navigate(paths.home);
    }

    setIsLogin(false);

    isClicked.ok = false;
  };
  const cancelHandler = () => {
    if (isClicked.cancel) return;
    isClicked.cancel = true;

    setIsLogin(false);
    navigate(paths.home);

    isClicked.cancel = false;
  };

  return (
    <Card className={styles.area}>
      <header className={styles.header}>
        <h2>Setting</h2>
      </header>
      <SettingField
        label="Table name"
        inputId="table-name"
        inputState={tableState}
      />
      <div className={styles.btns}>
        <button onClick={okHandler}>OK</button>
        <button onClick={cancelHandler}>Cancel</button>
      </div>
    </Card>
  );
};

export default SettingsForm;
