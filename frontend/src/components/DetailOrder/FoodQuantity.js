import styles from "./FoodQuantity.module.css";

const FoodQuantity = (props) => {
  return (
    <div className={styles.area}>
      <h3 className={styles.quantity}>{props.quantity}</h3>
    </div>
  );
};

export default FoodQuantity;
