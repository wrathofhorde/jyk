import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={styles.area}>
      <h3 className={styles.title}>{props.title}</h3>
    </div>
  );
};

export default Title;
