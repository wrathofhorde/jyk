import styles from "./FoodName.module.css";

const FoodName = ({ name }) => {
  return (
    <div className={styles.area}>
      <h3 className={styles.name}>{name}</h3>
    </div>
  );
};

export default FoodName;
