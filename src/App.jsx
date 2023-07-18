import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Navegacion from "./components/Navegacion";



const App = () => {
  return (
    <Router>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </Router>
  );
};

export default App;
