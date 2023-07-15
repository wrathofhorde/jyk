import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../common/api";
import url from "../common/url";
import paths from "../common/paths";
import MessageModal from "../UI/MessageModal";
import TableName from "../components/Intro/TableName";
import useFoodsContext from "../contexts/foods-context";
import SettingsButton from "../components/Intro/SettingsButton";

import styles from "./Intro.module.css";

const Intro = () => {
  const [message, setMessage] = useState(null);
  const [, setFoods] = useFoodsContext();

  const messageConfirmHandler = () => {
    setMessage(null);
  };

  useEffect(() => {
    const getList = async () => {
      try {
        const rsp = await api.get(url.foodList);

        if (rsp.resultCode !== 0) {
          setMessage({
            title: "Error",
            message: "Menu Failure",
          });
          return;
        }

        const rspFoodtype = rsp.data.food_type;
        const rspItems = rsp.data.items;

        const foodtype = [];
        const items = rsp.data.items;

        rspFoodtype.forEach((elem, idx) => {
          const slectedItems = rspItems.filter(
            (item) => item.type_id === elem.type_id
          );
          // console.log(slectedItems);
          if (slectedItems.length) {
            foodtype.push(elem);
          }
        });

        setFoods({ foodtype, items });
      } catch (e) {
        setMessage({
          title: e.name,
          message: e.message,
        });
      }
    };

    getList();
  }, [setFoods]);

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
        <TableName />
        <SettingsButton />
        <Link to={paths.order} className={styles.order}>
          ORDER
        </Link>
      </div>
    </div>
  );
};

export default Intro;
