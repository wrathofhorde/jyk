import styles from "./QuantityButton.module.css";

const QuantityButton = (props) => {
  const imageUrl = `/images/${props.img}`;

  return (
    <div className={styles.area}>
      <button className={styles.round} onClick={props.onClick}>
        <img src={imageUrl} alt={props.name} className={styles.button_img} />
      </button>
    </div>
  );
};

export default QuantityButton;
