import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../imagenes/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "./estilos/Navegacion.css";

const Navegacion = () => {
  return (
    <Navbar
      className="navegacion"
      bg="white"
      expand="lg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        height: "80px",
      }}
    >
      <Navbar.Brand>
        <img src={logo} alt="Logo" style={{ height: "65px", width: "135px" }} />
      </Navbar.Brand>
      <nav>
        <div className="buscador">
          <ul>
            <li><b>En cualquier lugar del mundo</b></li>
            <li><b>Cualquier semana </b></li>
            <span className="cuántos">
              <b>¿Cuantos? </b>
              <i className="bi bi-search"></i>
            </span>
          </ul>
        </div>
      </nav>
      <nav>
        <div>
          <button className="navclick">Pon tu espacio en Airbnb</button>
          <span className="mundo">
            <button className="bi bi-globe"></button>
          </span>
        </div>
        <div className="avatar">
          <span className="lista">
            <i className="bi bi-list fs-5"></i>
          </span>
          <span className="persona">
            <i className="bi bi-person-circle fs-3"></i>
          </span>
        </div>
      </nav>
    </Navbar>
  );
};

export default Navegacion;
