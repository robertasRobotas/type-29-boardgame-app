import React, { useEffect } from "react";
import styles from "./styles.module.css";

const Card = ({ id, title, isCompleted, onCardClick }) => {
  useEffect(() => {
    console.log("55555555");

    return () => {
      console.log("remove component");
    };
  }, []);

  return (
    <div className={styles.card} onClick={() => onCardClick(id)}>
      <h3>{title}</h3>
      <div
        className={`${styles.indicator} ${isCompleted ? styles.completed : styles.notCompleted}`}
      ></div>
    </div>
  );
};

export default Card;
