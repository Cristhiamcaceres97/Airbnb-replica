import React, { useState } from "react";
import { Navbar, Modal } from "react-bootstrap";
import logo from "../imagenes/logo.png";
import { Switch, Spacer } from "@nextui-org/react";
import "bootstrap/dist/css/bootstrap.css";
import "./estilos/Navegacion.css";

const Navegacion = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAvatarClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleGlobeButtonClick = () => {
    setModalVisible(true);
  };


  return (
    <>
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
          <img
            src={logo}
            alt="Logo"
            style={{ height: "65px", width: "135px" }}
          />
        </Navbar.Brand>
        <nav>
          <div className="buscador">
            <ul>
              <li>
                <b>En cualquier lugar del mundo</b>
              </li>
              <li>
                <b>Cualquier semana </b>
              </li>
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
              <button
                className="bi bi-globe"
                onClick={handleGlobeButtonClick}
              ></button>
            </span>
          </div>
          <div className="avatar">
            <span className="lista">
              <i className="bi bi-list fs-5"></i>
            </span>
            <span className="persona" onClick={handleAvatarClick}>
              <i className="bi bi-person-circle fs-3"></i>
            </span>
          </div>
        </nav>
      </Navbar>

      <Modal
    
        show={modalVisible}
        onHide={handleCloseModal}
        dialogClassName="modal-xl"
      >
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>
            <button className="btn btn-primary transparent-btn" style={{marginBottom: "2px black solid !important"}}>
              Idioma y región
            </button>
            <button className="btn btn-primary transparent-btn">Moneda</button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="traductor">
            <p>
            <b> Traducción</b> 
              <img
                src="https://st4.depositphotos.com/25166984/27772/v/450/depositphotos_277723950-stock-illustration-language-translation-icon-black-and.jpg"
                width={30} style={{backgroundColor: "#F7F7F7"}}
                alt=""
              />
              <br />
              Traducir automáticamente las descripciones y las reseñas al
              Español.  <b style={{ position: "relative", bottom: "60px", left: "500px" }}>
                <Spacer />
                <Switch checked={true} size="xl" />
              </b>
            </p>
          </div>

          <h3>Idioma y región sugeridos</h3>
          <p>
            <button className="btn btn-primary transparent-btn">
              Español <br />
              España
            </button>
          </p>

          <h3>Elige un idioma y una región</h3>
          <p>
            <button className="btn btn-primary transparent-btn">
              Español <br />
              Colombia
            </button>
            <button className="btn btn-primary transparent-btn">
              Ingles <br />
              Inglish
            </button>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navegacion;
