import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bill from "../UI/Bill";
import Menu from "../UI/Menu";
import api from "../common/api";

import styles from "./Order.module.css";
import ErrorModal from "../UI/ErrorModal";

const Order = (props) => {
  const serverUrl = "http://localhost:3001";
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [error, setError] = useState(null);

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
      const rsp = await api.post(`${serverUrl}/foods/order`, { orderList });

      if (rsp.resultCode === 0) {
        console.log("orderlist sent");
        navigate("/");
      } else {
        console.log("order failure");
        setError({
          title: "Error!",
          message: "Order Failure",
        });
      }
    } catch (e) {
      setError({
        title: "Error!",
        message: "Unknown order error",
      });
    }
  };

  const errorConfirmHandler = () => {
    navigate("/");
  };

  useEffect(() => {
    const getList = async () => {
      try {
        const rsp = await api.get(`${serverUrl}/foods/list`);

        if (rsp.resultCode === 0) {
          setFoods(rsp.data);
        } else {
          navigate("/");
        }
      } catch (e) {
        navigate("/");
      }
    };

    getList();
  }, [navigate]);

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorConfirmHandler}
        />
      )}
      <div className={styles.container}>
        <Menu items={foods} addOrderListHandler={addOrderListHandler} />
        <Bill
          orderList={orderList}
          quantityHandler={quantityHandler}
          postOrderHandler={postOrderHandler}
        />
      </div>
    </div>
  );
};

export default Order;
