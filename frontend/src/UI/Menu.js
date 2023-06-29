import FooodItem from "../components/FoolItem/FoodItem";
import TabArea from "../components/Tab/TabArea";

import styles from "./Menu.module.css";

const Menu = (props) => {
  console.log(props.foodtype);
  return (
    <div className={styles.menu}>
      <TabArea foodtype={props.foodtype} />
      <div className={styles.food_item}>
        {props.items.map((item) => (
          <FooodItem
            key={item.id}
            item={item}
            addOrderListHandler={props.addOrderListHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
