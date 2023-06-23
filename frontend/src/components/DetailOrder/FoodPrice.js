import styles from "./FoodPrice.module.css";

const FoodPrice = (props) => {
  return (
    <div className={styles.area}>
      <h3>{props.price}</h3>
    </div>
  );
};

export default FoodPrice;
