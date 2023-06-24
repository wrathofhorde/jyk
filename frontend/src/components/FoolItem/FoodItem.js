import FoodName from "./FoodName";
import FoodPrice from "./FoodPrice";
import FoodPicture from "./FoodPicture";

import styles from "./FoodItem.module.css";

const FoodItem = (props) => {
  const item = props.item;
  const addFoodHandler = props.addFoodHandler;

  const onClickItem = () => {
    addFoodHandler(item);
  };

  return (
    <button className={styles.item} onClick={onClickItem}>
      <FoodPicture image={item.image} />
      <FoodName name={item.name} />
      <FoodPrice price={item.price} />
    </button>
  );
};

export default FoodItem;
