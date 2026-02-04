import React, { useState } from "react";
import styles from "./styles.module.css";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";

const Main = ({ data }) => {
  return (
    <main className={styles.main}>
      {data ? (
        data.map((t) => {
          return <Card title={t.name} img={t.imgUrl} key={t.id} />;
        })
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default Main;
