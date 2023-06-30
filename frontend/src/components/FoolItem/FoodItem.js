import FoodName from "./FoodName";
import FoodPrice from "./FoodPrice";
import FoodPicture from "./FoodPicture";

import styles from "./FoodItem.module.css";

const FoodItem = ({ item, addOrderListHandler }) => {
  const onClickItem = () => {
    addOrderListHandler(item);
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
