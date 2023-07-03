import Login from "../components/login/Login";

import styles from "./Settings.module.css";

const Settings = () => {
  return <div className={styles.area}>{<Login />}</div>;
};

export default Settings;
