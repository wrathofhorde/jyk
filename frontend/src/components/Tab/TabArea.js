import TabButton from "./TabButton";

import styles from "./TabArea.module.css";

const TabArea = (props) => {
  const foodtype = props.foodtype;

  return (
    <ul className={styles.area}>
      {foodtype.map((type) => (
        <TabButton key={type.type_id} type={type.type_id}>
          {type.name}
        </TabButton>
      ))}
    </ul>
  );
};

export default TabArea;
