import Menu from "./pages/Menu";
import { useEffect, useState } from "react";

import styles from "./App.module.css";

const items = [
  {
    image: `${process.env.PUBLIC_URL}/1.png`,
    name: "Hamburger",
    price: 10,
  },
  {
    image: `${process.env.PUBLIC_URL}/2.png`,
    name: "Pizza",
    price: 20,
  },
  {
    image: `${process.env.PUBLIC_URL}/3.png`,
    name: "Apple pie",
    price: 5,
  },
  {
    image: `${process.env.PUBLIC_URL}/4.png`,
    name: "Thanksgiving Turkey Hello World",
    price: 150,
  },
  {
    image: `${process.env.PUBLIC_URL}/5.png`,
    name: "Fried Chicken",
    price: 7,
  },
  {
    image: `${process.env.PUBLIC_URL}/6.png`,
    name: "Buffalo Wings",
    price: 10,
  },
];

const App = () => {
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
    </div>
  );
};

export default App;
