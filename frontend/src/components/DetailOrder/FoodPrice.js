import styles from "./FoodPrice.module.css";

const FoodPrice = ({ price }) => {
  return (
    <div className={styles.area}>
      <h3>{price}</h3>
    </div>
  );
};

export default FoodPrice;
