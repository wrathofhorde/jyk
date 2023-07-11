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
  const invalidTable = "Invalid Table Name";
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([]);
  const [message, setMessage] = useState(null);
  const [tableName, setTableName] = useState("");

  const isValidTableName = (table) => {
    return table !== null && table.length !== 0 && table !== invalidTable;
  };

  const addOrderListHandler = (item) => {
    if (!isValidTableName(tableName)) {
      setMessage({ title: "Error", message: "Set a table name first!" });
      return;
    }

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
    const table = localStorage.getItem("table");
    setTableName(isValidTableName(table) ? table : invalidTable);
  }, []);

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
        <Menu addOrderListHandler={addOrderListHandler} />
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
