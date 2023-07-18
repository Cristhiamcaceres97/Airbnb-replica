import React from "react";
import Carousel from "./Carousel";
import MostrarPrecio from "./MostrarPrecio";
import DataCards from "./DataCards";
import Data from "./data/Data";

const Inicio = () => {
  return (
    <div>
      <Carousel />
      <MostrarPrecio />
      <DataCards data={Data} />
    </div>
  );
};

export default Inicio;
