import React, { useState } from "react";
import { Navbar, Modal } from "react-bootstrap";
import logo from "../imagenes/logo.png";
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
              <button className="bi bi-globe"></button>
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
        dialogClassName="modal-custom"
        contentClassName="modal-custom-content"
        backdrop="false" // Agregar esta línea
      >
        <Modal.Body>
          <ul className="modal-list">
            <li><h6>Regístrate</h6></li>
            <li className="inicia-sesion">Inicia sesión</li>
            <li>Pon tu espacio en Airbnb</li>
            <li>Ayuda</li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navegacion;
