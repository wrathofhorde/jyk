import { Link } from "react-router-dom";

import styles from "./Intro.module.css";

const Intro = (props) => {
  return (
    <div className={styles.container}>
      <Link to="/order" className={styles.order}>
        ORDER
      </Link>
    </div>
  );
};

export default Intro;
