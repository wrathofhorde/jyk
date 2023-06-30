import styles from "./FoodName.module.css";

const FoodName = ({ name }) => {
  return (
    <div>
      <h1 className={styles.name}>{name}</h1>
    </div>
  );
};

export default FoodName;
