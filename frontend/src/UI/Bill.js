import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Sum from "../components/Bill/Sum";
import Title from "../components/Bill/Title";
import Details from "../components/Bill/Details";
import Buttons from "../components/Bill/Buttons";

import styles from "./Bill.module.css";

const Bill = (props) => {
  const { orders, quantityHandler } = props;
  const navigate = useNavigate();
  const isClicked = useRef({
    order: false,
    cancel: false,
  });

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
    <div className={styles.bill}>
      <Title title="Table 01" />
      <Details orders={orders} quantityHandler={quantityHandler} />
      <Sum orders={orders} />
      <Buttons
        orders={orders}
        orderHandler={orderHandler}
        cancelHandler={cancelHandler}
      />
    </div>
  );
};

export default Bill;
