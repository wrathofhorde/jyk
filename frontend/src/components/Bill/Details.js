import DetailOrder from "../DetailOrder/DetailOrder";

import styles from "./Details.module.css";

const Details = (props) => {
  const { orders, quantityHandler } = props;

  return (
    <div className={styles.area}>
      {orders.map((order) => (
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
