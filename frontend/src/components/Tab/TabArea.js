import styles from "./TabArea.module.css";

const TabArea = ({ children }) => {
  return <ul className={styles.area}>{children}</ul>;
};

export default TabArea;
