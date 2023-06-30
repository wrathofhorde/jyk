import styles from "./Title.module.css";

const Title = ({ title }) => {
  return (
    <div className={styles.area}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Title;
