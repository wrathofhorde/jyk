import Bill from "./Bill";
import Menu from "./Menu";
import { useState, useEffect } from "react";

import styles from "./Order.module.css";

const Order = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const data = await fetch("http://localhost:3001/foods/list");
      const rsp = await data.json();

      if (rsp.resultCode === 0) {
        setFoods(rsp.data);
      }
    };
    getList();
  }, []);

  return (
    <div className={styles.container}>
      <Menu items={foods} />
      <Bill />
    </div>
  );
};

export default Order;
