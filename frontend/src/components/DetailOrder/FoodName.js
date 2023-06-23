import styles from "./FoodName.module.css";

const FoodName = (props) => {
  return (
    <div className={styles.area}>
      <h3 className={styles.name}>{props.name}</h3>
    </div>
  );
};

export default FoodName;
