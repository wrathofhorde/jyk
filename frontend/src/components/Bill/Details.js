import DetailOrder from "../DetailOrder/DetailOrder";

import styles from "./Details.module.css";

const Details = (props) => {
  const { orderList, quantityHandler } = props;

  return (
    <div className={styles.area}>
      {orderList.map((order) => (
        <DetailOrder
          key={order.id}
          order={order}
          quantityHandler={quantityHandler}
        />
      ))}
    </div>
  );
};

export default Details;
