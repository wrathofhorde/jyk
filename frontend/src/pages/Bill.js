import Sum from "../components/Bill/Sum";
import Title from "../components/Bill/Title";
import Details from "../components/Bill/Details";
import Buttons from "../components/Bill/Buttons";

import styles from "./Bill.module.css";

const Bill = (props) => {
  return (
    <div className={styles.bill}>
      <Title title="Table 01" />
      <Details />
      <Sum />
      <Buttons />
    </div>
  );
};

export default Bill;
