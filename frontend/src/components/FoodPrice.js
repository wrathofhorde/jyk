import styles from "./FoodPrice.module.css";

function FoodPrice(props) {
  return (
    <>
      <h2 className={styles.price}>${props.price}</h2>
    </>
  );
}

export default FoodPrice;
