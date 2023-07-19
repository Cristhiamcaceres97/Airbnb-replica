import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./estilos/Carousel.css";

const Carousel = () => {
  return (
    <div
      className="imagenes"
      style={{
        position: "fixed",
        top: "80px",
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <ul>
        <li>
          <div className="image-uno">
            <img
              src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
              alt="uno"
              width={24}
              height={24}
            />
          </div>
        </li>
        <span className="uno">Piscinas increibles</span>
        <li>
          <div className="image-container">
            <img
              src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
              alt="dos"
              width={24}
              height={24}
            />
          </div>
        </li>
        <span className="texto-dos">Cabañas</span>
        <li>
          <div className="image-container">
            <img
              src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
              alt="tres"
              width={24}
              height={24}
            />
          </div>
        </li>
        <span className="texto-dos">Vistas increibles</span>
        <li>
          <div className="image-container">
            <img
              src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
              alt="cuatro"
              width={24}
              height={24}
            />
          </div>
        </li>
        <span className="texto-dos">Mansiones</span>
        <li>
          <div className="image-container">
            <img
              src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
              alt="cinco"
              width={24}
              height={24}
            />
          </div>
        </li>
        <span className="texto-dos">Populares</span>
        <li>
          <div className="image-container">
            <img
              src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
              alt="seis"
              width={24}
              height={24}
            />
          </div>
        </li>
        <span className="texto-dos">Habitaciones</span>
        <li>
          <div className="image-container">
            <img
              src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
              alt="siete"
              width={24}
              height={24}
            />
          </div>
        </li>
        <span className="texto-dos">Casas Rurales</span>
        <li>
          <div className="image-container">
            <img
              src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
              alt="ocho"
              width={24}
              height={24}
            />
          </div>
        </li>
        <span className="texto-dos">Frente A La Playa</span>
        <li>
          <div className="image-container">
            <img
              src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
              alt="nueve"
              width={24}
              height={24}
            />
          </div>
        </li>
        <span className="texto-dos">Parques Nacionales</span>
        <span className="siguiente">
          <i
            className="bi bi-chevron-right bi-fw fw-bold"
            style={{ color: "black" }}
          ></i>
        </span>
        <li className="filtro">
          <img
            src="https://t3.ftcdn.net/jpg/03/20/78/84/360_F_320788419_5apyi8WJlvD7RuBivEyY23TfXLYoN46J.jpg"
            width={24}
            height={24}
            style={{ bc: "black" }}
            alt="filtros"
          />
          <b> Filtros</b>
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
