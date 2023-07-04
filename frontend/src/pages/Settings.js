import Login from "../components/login/Login";
import SettingsForm from "../UI/SettingsForm";
import { useLoginContext } from "../contexts/login-context";

import styles from "./Settings.module.css";

const Settings = () => {
  const [isLogin] = useLoginContext();

  return (
    <div className={styles.area}>
      {!isLogin && <Login />}
      {isLogin && <SettingsForm />}
    </div>
  );
};

export default Settings;
