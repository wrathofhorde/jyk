import styles from "./QuantityButton.module.css";

const QuantityButton = (props) => {
  return (
    <div className={styles.area}>
      <button className={styles.round} onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
};

export default QuantityButton;
