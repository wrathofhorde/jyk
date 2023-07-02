import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SettingsButton.module.css";

const SettingsButton = () => {
  const image = "settings.svg";
  const btn = useRef({ isClicked: false });
  const navigate = useNavigate();
  const onClick = () => {
    if (btn.isClicked) return;

    btn.isClicked = true;

    navigate("/order");

    btn.isClicked = false;
  };
  return (
    <button className={styles.area} onClick={onClick}>
      <img className={styles.image} src={`/images/${image}`} alt={`${image}`} />
    </button>
  );
};

export default SettingsButton;
