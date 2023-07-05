import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Bill from "../UI/Bill";
import Menu from "../UI/Menu";
import api from "../common/api";
import url from "../common/url";
import paths from "../common/paths";
import MessageModal from "../UI/MessageModal";

import styles from "./Order.module.css";

const Order = () => {
  const tableName = "TABLE 01";
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [foodtype, setFoodtype] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [message, setMessage] = useState(null);

  const addOrderListHandler = (item) => {
    setOrderList((prevState) => {
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
    setOrderList((prevState) => {
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

  const postOrderHandler = async () => {
    try {
      const acc = orderList.reduce((acc, cur) => acc + cur.total, 0);
      const total = Math.round(acc * 100) / 100;
      const rsp = await api.post(url.foodOrder, {
        tableName,
        orderList,
        total,
      });

      if (rsp.resultCode === 0) {
        // console.log("orderlist sent");
        setMessage({
          title: "Message",
          message: "Order Successful!",
        });
      } else {
        // console.log("order failure");
        setMessage({
          title: "Error",
          message: "Order Failure",
        });
      }
    } catch (e) {
      setMessage({
        title: e.name,
        message: `Order Failure: ${e.message}`,
      });
    }
  };

  const messageConfirmHandler = () => {
    setMessage(null);
    navigate(paths.home);
  };

  useEffect(() => {
    const getList = async () => {
      try {
        const rsp = await api.get(url.foodList);

        if (rsp.resultCode === 0) {
          setFoods(rsp.data.items);
          setFoodtype(rsp.data.food_type);
        } else {
          setMessage({
            title: "Error",
            message: "Menu Failure",
          });
        }
      } catch (e) {
        setMessage({
          title: e.name,
          message: e.message,
        });
      }
    };

    getList();
  }, [navigate]);

  return (
    <div>
      {message && (
        <MessageModal
          title={message.title}
          message={message.message}
          onConfirm={messageConfirmHandler}
        />
      )}
      <div className={styles.container}>
        <Menu
          foodtype={foodtype}
          items={foods}
          addOrderListHandler={addOrderListHandler}
        />
        <Bill
          title={tableName}
          orderList={orderList}
          quantityHandler={quantityHandler}
          postOrderHandler={postOrderHandler}
        />
      </div>
    </div>
  );
};

export default Order;
