import Bill from "./Bill";
import Menu from "./Menu";
import { useState, useEffect } from "react";

import styles from "./Order.module.css";

const Order = (props) => {
  const [foods, setFoods] = useState([]);
  const [orders, setOrders] = useState([]);

  const addFoodHandler = (item) => {
    setOrders((prevState) => {
      const filtered = prevState.filter((food) => food.id === item.id);
      if (filtered.length) {
        // console.log(`${item.id} exists`);
        return prevState;
      }

      const newList = [
        ...prevState,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
          total: item.price,
        },
      ];

      // console.log(newList);

      return newList;
    });
  };

  const quantityHandler = (id, quantity) => {
    setOrders((prevState) => {
      const idx = prevState.findIndex((order) => order.id === id);
      const changedOrder = prevState[idx];
      changedOrder.quantity += quantity;

      if (changedOrder.quantity === 0) {
        prevState.splice(idx, 1);
      } else if (changedOrder.quantity === 100) {
        changedOrder.quantity = 99;
      } else {
        changedOrder.total =
          Math.round(changedOrder.quantity * changedOrder.price * 100) / 100;
      }

      return [...prevState];
    });
  };

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
      <Menu items={foods} addFoodHandler={addFoodHandler} />
      <Bill orders={orders} quantityHandler={quantityHandler} />
    </div>
  );
};

export default Order;
