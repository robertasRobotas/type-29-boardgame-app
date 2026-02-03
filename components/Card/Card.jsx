import React from "react";
import styles from "./styles.module.css";

const Card = ({ img, title }) => {
  return (
    <div className={styles.main}>
      <img src={img} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default Card;
