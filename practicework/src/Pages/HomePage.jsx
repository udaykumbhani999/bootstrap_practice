import React from "react";

import Header from "../Componet/Header/Header";
import Cards from "../Componet/Cards/Cards";
import Slider from "../Componet/Slider/Slider";
import Form from "../Componet/Form/Form";
import Bar from "../Componet/Bar/Bar";
import Accordian from "../Componet/Accordian/Accordian";
import Offset from "../Componet/Offset/Offset";
import Tabeldata from "../Componet/Tabeldata/Tabeldata";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Cards />
      <Slider />
      <Form />
      <Bar />
      <Accordian />
      <Offset />
      <Tabeldata />
    </div>
  );
};

export default HomePage;
