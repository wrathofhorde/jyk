import styles from "./Card.module.css";

const Card = (props) => {
  const onClick = () => {
    console.log("Card onClick");
  };
  const classes = `${styles.card} ${props.className}`;
  const onClickEvent = props.onClick ? props.onClick : onClick;
  return (
    <div className={classes} onClick={onClickEvent}>
      {props.children}
    </div>
  );
};

export default Card;
