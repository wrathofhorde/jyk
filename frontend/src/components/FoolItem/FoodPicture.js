import styles from "./FoodPicture.module.css";

const FoodPicture = ({ image }) => {
  return (
    <div className={styles.frame}>
      <img className={styles.picture} src={image} alt="food" />
    </div>
  );
};

export default FoodPicture;
