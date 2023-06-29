import styles from "./TabButton.module.css";

const TabButton = (props) => {
  return <button className={styles.tab}>{props.children}</button>;
};

export default TabButton;
