import React from "react";
import styles from "./styles.module.css";

const Card = ({ id, img, title, onClick }) => {
  return (
    <div className={styles.main} onClick={onClick}>
      <img src={img} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default Card;
