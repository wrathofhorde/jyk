import styles from "./TabButton.module.css";

const TabButton = ({ idx, children, tapButtonHandler }) => {
  const onClick = (event) => {
    tapButtonHandler(event, idx);
  };

  return (
    <button className={styles.tab} onClick={onClick}>
      {children}
    </button>
  );
};

export default TabButton;
