import styles from "./TabButton.module.css";

const TabButton = ({ idx, focus, children, tapButtonHandler }) => {
  let className = styles.tab;
  if (focus) {
    className += ` ${styles.focus}`;
  }
  const onClick = (event) => {
    tapButtonHandler(event, idx);
  };

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default TabButton;
