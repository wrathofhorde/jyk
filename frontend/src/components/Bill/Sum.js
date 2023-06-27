import styles from "./Sum.module.css";

const Sum = (props) => {
  const sum = props.orderList.reduce((acc, cur) => acc + cur.total, 0);

  return (
    <div className={styles.area}>
      <h2 className={styles.total}>TOTAL ${Math.round(sum * 100) / 100}</h2>
    </div>
  );
};

export default Sum;
