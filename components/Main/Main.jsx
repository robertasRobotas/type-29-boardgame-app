import React, { useState } from "react";
import styles from "./styles.module.css";
import Card from "../Card/Card";

const Main = () => {
  const [travels, setTravels] = useState([
    {
      title: "11111111111",
      img: "https://www.makalius.lt/wp-content/post-images/25743910-post/egzotiskos-atostogos-maldyvuose-privacioje-saloje-su-viskas-iskaiciuota-0-jau-gruodzio-menesi-8312-850x320-c1.jpg",
    },
    {
      title: "22222222222",
      img: "https://s.content4travel.com/itkbaltic/mauricijus_1_9f80d53a58.jpg",
    },
    {
      title: "33333333333",
      img: "https://www.tavogidas.lt/bahamai--idealiausia-vieta-atradimams-nuostabus-10-d-poilsis_fotobig16279.jpg",
    },
    {
      title: "44444444444",
      img: "https://cdn-jbbdp.nitrocdn.com/KCXzqUWDoupzlrsIQCTXrmGUEEWeTtuj/assets/images/optimized/rev-37e873b/www.eshores.co.uk/wp-content/uploads/2025/08/Papaoneone_Beach_Oahu.jpg",
    },
    {
      title: "5555555555",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/29/78/60/trakai-castle.jpg?w=600&h=500&s=1",
    },
  ]);

  console.log(travels);

  return (
    <main className={styles.main}>
      {travels.slice(0, 3).map((t) => {
        return <Card title={t.title} img={t.img} />;
      })}
      <button
        onClick={() => {
          setTravels([]);
        }}
      >
        DELETE ALL
      </button>
    </main>
  );
};

export default Main;
