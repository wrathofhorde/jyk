import styles from "./FoodQuantity.module.css";

const FoodQuantity = ({ quantity }) => {
  return (
    <div className={styles.area}>
      <h3 className={styles.quantity}>{quantity}</h3>
    </div>
  );
};

export default FoodQuantity;
