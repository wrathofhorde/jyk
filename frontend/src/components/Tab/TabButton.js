import styles from "./TabButton.module.css";

const TabButton = (props) => {
  return (
    <button className={styles.tab} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default TabButton;
