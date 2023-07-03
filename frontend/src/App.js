import { Routes, Route } from "react-router-dom";

import Order from "./pages/Order";
import Intro from "./pages/Intro";
import paths from "./common/paths";
import Settings from "./pages/Settings";
import LoginContextProvider from "./contexts/login-context";

import styles from "./App.module.css";

// const sleep = (sec) => {
//   return new Promise((resolve) => setTimeout(resolve, sec * 1000));
// };

const App = () => {
  return (
    <LoginContextProvider initValue={false}>
      <div className={styles.container}>
        <Routes>
          <Route path={paths.order} element={<Order />} />
          <Route path={paths.settings} element={<Settings />} />
          <Route path="*" element={<Intro />} />
        </Routes>
      </div>
    </LoginContextProvider>
  );
};

export default App;
