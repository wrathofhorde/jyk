import Login from "../components/Login/Login";
import SettingsForm from "../UI/SettingsForm";
import useLoginContext from "../contexts/login-context";

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
