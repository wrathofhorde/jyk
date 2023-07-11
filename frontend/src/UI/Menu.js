import { useEffect, useState } from "react";

import TabArea from "../components/Tab/TabArea";
import TabButton from "../components/Tab/TabButton";
import FooodItem from "../components/FoolItem/FoodItem";
import useFoodsContext from "../contexts/foods-context";

import styles from "./Menu.module.css";

const Menu = ({ addOrderListHandler }) => {
  const [focusTab, setFocusTab] = useState([]);
  const [{ foodtype, items }] = useFoodsContext();

  const tapButtonHandler = (event, idx) => {
    const arr = new Array(focusTab.length).fill(false);
    arr[idx] = true;
    setFocusTab(arr);
  };

  useEffect(() => {
    const arr = new Array(foodtype.length).fill(false);
    arr[0] = true;
    setFocusTab(arr);
  }, [foodtype.length]);

  return (
    <div className={styles.menu}>
      <TabArea>
        {foodtype.map((type, idx) => (
          <TabButton
            key={type.type_id}
            idx={idx}
            focus={focusTab.length && focusTab[idx] === true ? true : false}
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
