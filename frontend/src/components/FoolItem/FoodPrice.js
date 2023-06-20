import styles from "./FoodPrice.module.css";

const FoodPrice = (props) => {
  return (
    <div>
      <h2 className={styles.price}>${props.price}</h2>;
    </div>
  );
};

export default FoodPrice;
