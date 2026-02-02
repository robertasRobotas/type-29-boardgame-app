import React from "react";
import styles from "./styles.module.css";
import Card from "../Card/Card";

const Main = () => {
  return (
    <main className={styles.main}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  );
};

export default Main;
