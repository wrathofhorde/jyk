import Login from "../components/login/Login";
import { useLoginContext } from "../contexts/login-context";

import styles from "./Settings.module.css";

const Settings = () => {
  const [isLogin] = useLoginContext();

  return <div className={styles.area}>{!isLogin && <Login />}</div>;
};

export default Settings;
