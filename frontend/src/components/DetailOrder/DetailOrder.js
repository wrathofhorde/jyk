import { useRef } from "react";
import FoodName from "./FoodName";
import FoodPrice from "./FoodPrice";
import FoodQuantity from "./FoodQuantity";
import QuantityButton from "./QuantityButton";

import styles from "./DetailOrder.module.css";

const DetailOrder = ({ order, quantityHandler }) => {
  const { id, name, quantity, total } = order;
  const isClicked = useRef({
    plus: false,
    minus: false,
  });

  const minusOnClickHandler = (event) => {
    if (isClicked.minus) return;
    isClicked.minus = true;

    quantityHandler(id, -1);

    isClicked.minus = false;
  };
  const plusOnClickHandler = (event) => {
    if (isClicked.plus) return;
    isClicked.plus = true;

    quantityHandler(id, 1);

    isClicked.plus = false;
  };

  return (
    <div className={styles.area}>
      <FoodName name={name} />
      <FoodPrice price={`$${total}`} />
      <div className={styles.quantity_area}>
        <QuantityButton img="minus.svg" onClick={minusOnClickHandler} />
        <FoodQuantity quantity={quantity} />
        <QuantityButton img="plus.svg" onClick={plusOnClickHandler} />
      </div>
    </div>
  );
};

export default DetailOrder;
