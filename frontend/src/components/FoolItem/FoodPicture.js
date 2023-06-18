import styles from "./FoodPicture.module.css";

const FoodPicture = (props) => {
  return (
    <div className={styles.frame}>
      <img className={styles.picture} src={props.image} alt="food" />
    </div>
  );
};

export default FoodPicture;
