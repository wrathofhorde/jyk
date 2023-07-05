import { useState, useRef } from "react";
import Card from "./Card";
import useLoginContext from "../contexts/login-context";
import SettingField from "../components/SettingField/SettingField";

import styles from "./SettingsForm.module.css";

const SettingsForm = () => {
  const tableState = useState("");
  const [, setIsLogin] = useLoginContext();
  const isClicked = useRef({ ok: false, cancel: false });

  const okHandler = () => {
    if (isClicked.ok) return;
    isClicked.ok = true;

    isClicked.ok = false;
  };
  const cancelHandler = () => {
    if (isClicked.cancel) return;
    isClicked.cancel = true;

    setIsLogin(false);

    isClicked.cancel = false;
  };

  return (
    <Card className={styles.area}>
      <header className={styles.header}>
        <h2>Setting</h2>
      </header>
      <SettingField
        label="Table NO."
        inputId="tableNo"
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
