import styles from "./FoodPicture.module.css";

function FoodPicture(props) {
  return (
    <div className={styles.frame}>
      <img className={styles.picture} src={props.image} alt="food" />
    </div>
  );
}

export default FoodPicture;
