import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const Page = () => {
  const [name, setName] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setName(name + 1);
        }}
      >
        Click
      </button>
      {name}
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Page;
