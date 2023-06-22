import Sum from "../components/Bill/Sum";
import Title from "../components/Bill/Title";
import Details from "../components/Bill/Details";

import styles from "./Bill.module.css";

const Bill = (props) => {
  return (
    <div className={styles.bill}>
      <Title title="Table 01" />
      <Details />
      <Sum />
    </div>
  );
};

export default Bill;
