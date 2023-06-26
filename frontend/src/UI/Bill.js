import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Sum from "../components/Bill/Sum";
import Title from "../components/Bill/Title";
import Details from "../components/Bill/Details";
import Buttons from "../components/Bill/Buttons";

import styles from "./Bill.module.css";

const Bill = (props) => {
  const { orderList, quantityHandler, postOrderHandler } = props;
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
  const orderHandler = async (event) => {
    if (isClicked.order) return;
    isClicked.order = true;

    console.log("order");
    await postOrderHandler();

    isClicked.order = false;
  };

  return (
    <div className={styles.bill}>
      <Title title="Table 01" />
      <Details orderList={orderList} quantityHandler={quantityHandler} />
      <Sum orderList={orderList} />
      <Buttons
        orderList={orderList}
        orderHandler={orderHandler}
        cancelHandler={cancelHandler}
      />
    </div>
  );
};

export default Bill;
