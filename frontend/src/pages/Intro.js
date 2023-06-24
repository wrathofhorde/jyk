import styles from "./Intro.module.css";

const Intro = (props) => {
  const orderHandler = (event) => {};

  return (
    <div className={styles.container}>
      <button className={styles.order} onClick={orderHandler}>
        ORDER
      </button>
    </div>
  );
};

export default Intro;
