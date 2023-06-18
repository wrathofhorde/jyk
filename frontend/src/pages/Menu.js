import FooodItem from "../components/FoolItem/FoodItem";

import styles from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={styles.menu}>
      {props.items.map((item, index) => (
        <FooodItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Menu;
