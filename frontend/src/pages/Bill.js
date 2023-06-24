import Sum from "../components/Bill/Sum";
import Title from "../components/Bill/Title";
import Details from "../components/Bill/Details";
import Buttons from "../components/Bill/Buttons";

import styles from "./Bill.module.css";

const Bill = (props) => {
  const { orders, quantityHandler } = props;

  return (
    <div className={styles.bill}>
      <Title title="Table 01" />
      <Details orders={orders} quantityHandler={quantityHandler} />
      <Sum orders={orders} />
      <Buttons />
    </div>
  );
};

export default Bill;
