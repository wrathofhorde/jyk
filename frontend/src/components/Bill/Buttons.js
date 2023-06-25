import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Buttons.module.css";

const Buttons = (props) => {
  const { orders } = props;
  const navigate = useNavigate();
  const isClicked = useRef({
    cancel: false,
    order: false,
  });
  const orderClassname = `${styles.common} ${styles.order}`;
  const cancelClassname = `${styles.common} ${styles.cancel}`;

  const cancelHandler = (event) => {
    if (isClicked.cancel) return;
    isClicked.cancel = true;

    navigate("/");

    isClicked.cancel = false;
  };
  const orderHandler = (event) => {
    if (isClicked.order) return;
    isClicked.order = true;

    console.log("order");

    isClicked.order = false;
  };

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
