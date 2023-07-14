import styles from "./TableName.module.css";

const TableName = (props) => {
  const tableName = localStorage.getItem("table");

  return (
    <div className={styles.area}>
      <h1 className={styles.table}>{tableName.length ? tableName : ""}</h1>
    </div>
  );
};

export default TableName;
