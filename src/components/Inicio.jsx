import React from "react";
import Carousel from "./Carousel";

import DataCards from "./DataCards";
import Data from "./data/Data";
import Footer from "./Footer";

const Inicio = () => {
  return (
    <div>
      <Carousel />
      <DataCards data={Data} />
      <Footer />
    </div>
  );
};

export default Inicio;
