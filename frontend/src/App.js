import Order from "./pages/Order";
import Intro from "./pages/Intro";
import { Routes, Route } from "react-router-dom";

import styles from "./App.module.css";

// const sleep = (sec) => {
//   return new Promise((resolve) => setTimeout(resolve, sec * 1000));
// };

const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Intro />} />
      </Routes>
    </div>
  );
};

export default App;
