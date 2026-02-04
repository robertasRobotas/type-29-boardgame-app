import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const Page = () => {
  const [games, setGames] = useState();

  const fetchData = async () => {
    const response = await axios.get(
      "https://695dfc9f2556fd22f676eeca.mockapi.io/games",
    );

    console.log(response.data);
    setGames(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main data={games} />
      <Footer />
    </>
  );
};

export default Page;
