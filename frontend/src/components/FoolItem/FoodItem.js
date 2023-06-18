import Card from "../UI/Card";
import FoodName from "./FoodName";
import FoodPrice from "./FoodPrice";
import FoodPicture from "./FoodPicture";

import styles from "./FoodItem.module.css";

const FoodItem = (props) => {
  const item = props.item;

  const onClick = () => {
    console.log(item);
  };

  return (
    <Card className={styles.item} onClick={onClick}>
      <FoodPicture image={item.image} />
      <FoodName name={item.name} />
      <FoodPrice price={item.price} />
    </Card>
  );
};

export default FoodItem;
