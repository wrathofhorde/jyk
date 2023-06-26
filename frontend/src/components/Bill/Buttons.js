import styles from "./Buttons.module.css";

const Buttons = (props) => {
  const { orders, orderHandler, cancelHandler } = props;
  const orderClassname = `${styles.common} ${styles.order}`;
  const cancelClassname = `${styles.common} ${styles.cancel}`;

  return (
    <div className={styles.area}>
      <button className={cancelClassname} onClick={cancelHandler}>
        Cancel
      </button>
      <button
        className={orderClassname}
        disabled={orders.length ? false : true}
        onClick={orderHandler}
      >
        Order
      </button>
    </div>
  );
};

export default Buttons;
