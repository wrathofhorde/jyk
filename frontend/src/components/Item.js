import FoodName from "./FoodName";
import FoodPrice from "./FoodPrice";
import FoodPicture from "./FoodPicture";

import styles from "./Item.module.css";

function Item(props) {
  return (
    <div className={styles.item}>
      <FoodPicture image={props.item.image} />
      <FoodName name={props.item.name} />
      <FoodPrice price={props.item.price} />
    </div>
  );
}

export default Item;
