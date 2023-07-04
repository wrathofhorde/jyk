import { Routes, Route } from "react-router-dom";

import Order from "./pages/Order";
import Intro from "./pages/Intro";
import paths from "./common/paths";
import Settings from "./pages/Settings";

import styles from "./App.module.css";

// const sleep = (sec) => {
//   return new Promise((resolve) => setTimeout(resolve, sec * 1000));
// };

const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path={paths.order} element={<Order />} />
        <Route path={paths.settings} element={<Settings />} />
        <Route path="*" element={<Intro />} />
      </Routes>
    </div>
  );
};

export default App;
