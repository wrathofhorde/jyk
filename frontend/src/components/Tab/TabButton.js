import styles from "./TabButton.module.css";

const TabButton = (props) => {
  return <button className={styles.tab}>{props.Chicken}</button>;
};

export default TabButton;
