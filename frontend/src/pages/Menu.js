import FooodItem from "../components/FoolItem/FoodItem";

import styles from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={styles.menu}>
      {props.items.map((item) => (
        <FooodItem
          key={item.id}
          item={item}
          addFoodHandler={props.addFoodHandler}
        />
      ))}
    </div>
  );
};

export default Menu;
