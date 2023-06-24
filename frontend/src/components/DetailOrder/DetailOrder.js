import { useRef } from "react";
import FoodName from "./FoodName";
import FoodPrice from "./FoodPrice";
import FoodQuantity from "./FoodQuantity";
import QuantityButton from "./QuantityButton";

import styles from "./DetailOrder.module.css";

const DetailOrder = (props) => {
  const { order, quantityHandler } = props;
  const { id, name, quantity, total } = order;
  const isClicked = useRef({
    plus: false,
    minus: false,
  });

  const minusOnClickHandler = (event) => {
    if (isClicked.minus) return;
    isClicked.minus = true;
    console.log("-");
    quantityHandler(id, -1);

    isClicked.minus = false;
  };
  const plusOnClickHandler = (event) => {
    if (isClicked.plus) return;
    isClicked.plus = true;
    console.log("+");
    quantityHandler(id, 1);

    isClicked.plus = false;
  };

  return (
    <div className={styles.area}>
      <FoodName name={name} />
      <FoodPrice price={`$${total}`} />
      <div className={styles.quantity_area}>
        <QuantityButton img="minus.png" onClick={minusOnClickHandler} />
        <FoodQuantity quantity={quantity} />
        <QuantityButton img="plus.png" onClick={plusOnClickHandler} />
      </div>
    </div>
  );
};

export default DetailOrder;
