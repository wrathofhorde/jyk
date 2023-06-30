import styles from "./QuantityButton.module.css";

const QuantityButton = ({ name, img, onClick }) => {
  const imageUrl = `/images/${img}`;

  return (
    <div className={styles.area}>
      <button className={styles.round} onClick={onClick}>
        <img src={imageUrl} alt={name} className={styles.button_img} />
      </button>
    </div>
  );
};

export default QuantityButton;
