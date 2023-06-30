import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../common/api";
import MessageModal from "../UI/MessageModal";

import styles from "./Intro.module.css";

const Intro = () => {
  const serverUrl = "http://localhost:3001";
  const [foods, setFoods] = useState([]);
  const [foodtype, setFoodtype] = useState([]);
  const [message, setMessage] = useState(null);

  const messageConfirmHandler = () => {
    setMessage(null);
  };

  useEffect(() => {
    const getList = async () => {
      try {
        const rsp = await api.get(`${serverUrl}/foods/list`);

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
        <Link to="/order" className={styles.order}>
          ORDER
        </Link>
      </div>
    </div>
  );
};

export default Intro;
