import styles from "./Sum.module.css";

const Sum = (props) => {
  const sum = props.orders.reduce((acc, cur) => {
    return acc + cur.total;
  }, 0);

  return (
    <div className={styles.area}>
      <h2 className={styles.total}>TOTAL ${sum}</h2>
    </div>
  );
};

export default Sum;
