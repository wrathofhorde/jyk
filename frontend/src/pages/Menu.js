import Item from "../components/Item";
import styles from "./Menu.module.css";

function Menu(props) {
  return (
    <div className={styles.container}>
      {props.items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}

export default Menu;
