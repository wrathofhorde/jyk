import Item from "./components/Item";
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
    name: "Thanksgiving Turkey",
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

function App() {
  return (
    <div className={styles.container}>
      <Item item={items[0]} />
      <Item item={items[1]} />
      <Item item={items[2]} />
      <Item item={items[3]} />
      <Item item={items[4]} />
      <Item item={items[5]} />
    </div>
  );
}

export default App;
