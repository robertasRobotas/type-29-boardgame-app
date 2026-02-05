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

    setGames(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main data={games} setData={setGames} />
      <Footer />
    </>
  );
};

export default Page;
