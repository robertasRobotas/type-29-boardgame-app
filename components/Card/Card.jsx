import React from "react";
import styles from "./styles.module.css";

const Card = ({ img, title }) => {
  const onClickCard = () => {
    console.log(title);
  };

  return (
    <div className={styles.main} onClick={onClickCard}>
      <img src={img} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default Card;
