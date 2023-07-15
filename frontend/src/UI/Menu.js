import { useCallback, useEffect, useState } from "react";

import TabArea from "../components/Tab/TabArea";
import TabButton from "../components/Tab/TabButton";
import FooodItem from "../components/FoolItem/FoodItem";
import useFoodsContext from "../contexts/foods-context";

import styles from "./Menu.module.css";

const Menu = ({ addOrderListHandler }) => {
  const [focusTab, setFocusTab] = useState([]);
  const [{ foodtype, items }] = useFoodsContext();
  const [selectedItems, setSelectedItems] = useState([]);

  const selectItems = useCallback(
    (idx) => {
      const selectedTypeId = foodtype[idx].type_id;
      const selected = items.filter((item) => item.type_id === selectedTypeId);
      setSelectedItems(selected);
    },
    [foodtype, items]
  );
  const tapButtonHandler = (event, idx) => {
    const arr = new Array(focusTab.length).fill(false);
    arr[idx] = true;
    setFocusTab(arr);
    selectItems(idx);
  };

  useEffect(() => {
    const idx = 0;
    const arr = new Array(foodtype.length).fill(false);
    arr[idx] = true;
    setFocusTab(arr);
    selectItems(idx);
  }, [foodtype.length, selectItems]);

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
        {selectedItems.map((item) => (
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
