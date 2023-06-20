import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={styles.area}>
      <h1 className={styles.title}>{props.title}</h1>
    </div>
  );
};

export default Title;
