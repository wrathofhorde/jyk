import styles from "./FoodPrice.module.css";

const FoodPrice = ({ price }) => {
  return (
    <div>
      <h2 className={styles.price}>${price}</h2>
    </div>
  );
};

export default FoodPrice;
