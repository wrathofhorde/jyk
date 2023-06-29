import FooodItem from "../components/FoolItem/FoodItem";
import TabArea from "../components/Tab/TabArea";

import styles from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={styles.menu}>
      {props.items.map((item) => (
        <FooodItem
          key={item.id}
          item={item}
          addOrderListHandler={props.addOrderListHandler}
        />
      ))}
    </div>
  );
};

export default Menu;
