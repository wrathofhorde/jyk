import styles from "./Buttons.module.css";

const Buttons = ({ orderList, orderHandler, cancelHandler }) => {
  const orderClassname = `${styles.common} ${styles.order}`;
  const cancelClassname = `${styles.common} ${styles.cancel}`;

  return (
    <div className={styles.area}>
      <button className={cancelClassname} onClick={cancelHandler}>
        Cancel
      </button>
      <button
        className={orderClassname}
        disabled={orderList.length ? false : true}
        onClick={orderHandler}
      >
        Order
      </button>
    </div>
  );
};

export default Buttons;
