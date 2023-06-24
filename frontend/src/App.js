import Order from "./pages/Order";
import Intro from "./pages/Intro";

import styles from "./App.module.css";

// const sleep = (sec) => {
//   return new Promise((resolve) => setTimeout(resolve, sec * 1000));
// };

const App = () => {
  return (
    <div className={styles.container}>
      {/* <Intro /> */}
      <Order />
    </div>
  );
};

export default App;
