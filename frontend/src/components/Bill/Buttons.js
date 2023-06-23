import styles from "./Buttons.module.css";

const Buttons = (props) => {
  const orderClassname = `${styles.common} ${styles.order}`;
  const cancelClassname = `${styles.common} ${styles.cancel}`;

  const cancelOnClickHandler = (event) => {
    console.log("cancel");
  };
  const orderOnClickHandler = (event) => {
    console.log("order");
  };

  return (
    <div className={styles.area}>
      <button className={cancelClassname} onClick={cancelOnClickHandler}>
        Cancel
      </button>
      <button className={orderClassname} onClick={orderOnClickHandler}>
        Order
      </button>
    </div>
  );
};

export default Buttons;
