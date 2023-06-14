import FoodName from "./FoodName";
import FoodPrice from "./FoodPrice";
import FoodPicture from "./FoodPicture";

import styles from "./Item.module.css";

function Item(props) {
  const item = props.item;

  const onClick = () => {
    console.log(item);
  };

  return (
    <div className={styles.item} onClick={onClick}>
      <FoodPicture image={item.image} />
      <FoodName name={item.name} />
      <FoodPrice price={item.price} />
    </div>
  );
}

export default Item;
