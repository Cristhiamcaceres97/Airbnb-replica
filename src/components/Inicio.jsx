import React from "react";
import Carousel from "./Carousel";
import DataCards from "./DataCards";
import Data from "./data/Data";
import MapaCentro from "./MapaCentro";
import Footer from "./Footer";

const Inicio = () => {
  return (
    <div>
      <Carousel /> 
      <DataCards data={Data} />
      <MapaCentro />
      <Footer />
    </div>
  );
};

export default Inicio;
