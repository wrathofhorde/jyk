import { useState } from "react";
import SettingField from "../components/SettingField/SettingField";

import styles from "./SettingsForm.module.css";
import { useNavigate } from "react-router-dom";
import paths from "../common/paths";

const SettingsForm = () => {
  const navigate = useNavigate();
  const tableState = useState("");

  const okHandler = () => {};
  const cancelHandler = () => {
    navigate(paths.home);
  };

  return (
    <div>
      <SettingField
        label="Table NO."
        inputId="tableNo"
        inputState={tableState}
      />
      <div className={styles.btns}>
        <button onClick={okHandler}>OK</button>
        <button onClick={cancelHandler}>Cancel</button>
      </div>
    </div>
  );
};

export default SettingsForm;
