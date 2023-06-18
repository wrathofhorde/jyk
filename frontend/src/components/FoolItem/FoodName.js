import styles from "./FoodName.module.css";

const FoodName = (props) => {
  return (
    <>
      <h1 className={styles.name}>{props.name}</h1>
    </>
  );
};

export default FoodName;
