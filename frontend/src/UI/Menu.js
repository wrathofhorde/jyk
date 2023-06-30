import { useEffect, useState } from "react";
import FooodItem from "../components/FoolItem/FoodItem";
import TabArea from "../components/Tab/TabArea";
import TabButton from "../components/Tab/TabButton";

import styles from "./Menu.module.css";

const Menu = ({ foodtype, items, addOrderListHandler }) => {
  const [focusTab, setFocusTab] = useState([]);
  const tapButtonHandler = (event, idx) => {
    console.log(`tab clicked ${idx}`);
  };

  return (
    <div className={styles.menu}>
      <TabArea>
        {foodtype.map((type, idx) => (
          <TabButton
            key={type.type_id}
            idx={idx}
            tapButtonHandler={tapButtonHandler}
          >
            {type.name}
          </TabButton>
        ))}
      </TabArea>
      <div className={styles.food_item}>
        {items.map((item) => (
          <FooodItem
            key={item.id}
            item={item}
            addOrderListHandler={addOrderListHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
