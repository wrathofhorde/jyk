import FoodName from "./FoodName";
import FoodPrice from "./FoodPrice";
import FoodQuantity from "./FoodQuantity";
import QuantityButton from "./QuantityButton";

import styles from "./DetailOrder.module.css";

const DetailOrder = (props) => {
  const plusOnClickHandler = (event) => {};
  const minusOnClickHandler = (event) => {};

  return (
    <div className={styles.area}>
      <FoodName name="Hamburger" />
      <FoodPrice price="$10" />
      <QuantityButton title="-" onClick={minusOnClickHandler} />
      <FoodQuantity quantity="1" />
      <QuantityButton title="+" onClick={plusOnClickHandler} />
    </div>
  );
};

export default DetailOrder;
