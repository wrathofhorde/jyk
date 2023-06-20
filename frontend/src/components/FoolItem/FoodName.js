import styles from "./FoodName.module.css";

const FoodName = (props) => {
  return (
    <div>
      <h1 className={styles.name}>{props.name}</h1>
    </div>
  );
};

export default FoodName;
