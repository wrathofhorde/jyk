import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={styles.area}>
      <h2 className={styles.title}>{props.title}</h2>
    </div>
  );
};

export default Title;
