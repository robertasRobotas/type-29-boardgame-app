import React, { useState } from "react";
import styles from "./styles.module.css";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";

const Main = ({ data, setData }) => {
  const removeData = (id) => {
    const filteredData = data.filter((fd) => {
      return fd.id !== id;
    });

    setData(filteredData);
  };

  return (
    <main className={styles.main}>
      {data ? (
        data.map((t) => {
          return (
            <Card
              id={t.id}
              title={t.name}
              img={t.imgUrl}
              key={t.id}
              onClick={() => removeData(t.id)}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default Main;
