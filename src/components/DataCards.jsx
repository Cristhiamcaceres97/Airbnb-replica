import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./estilos/DataCards.css";

const CardComponent = ({ images, ubicacion, distancia, dias, precio }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const heartIconStyle = {
    position: "relative",
    left: "230px",
    bottom: "250px",
    fontSize: "1.4rem",
    backgroundColor: "transparent",
    cursor: "pointer",
    color: isLiked ? "white" : "black",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="card border-0"
      style={{
        width: "311px",
        height: "65%",
      
        marginLeft: "10px",
        padding: "0",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={null}
        prevIcon={
          isHovered ? (
            <i
            className=""
            style={{
              width: "75px",
              height: "37px",
              color: "black",
              backgroundColor: "white",
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingRight: "10px",
              paddingLeft: "5px",
              marginLeft: "15px",
              alignItems: "center",
              borderRadius: "50%",
              fontSize: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
            }}
          > ❮ </i>
          ) : null
        }
        nextIcon={
          isHovered ? (
            <i className=""  style={{
              width: "60px",
              height: "37px",
              color: "black",
              backgroundColor: "white",
              paddingTop: "0px",
              paddingBottom: "2px",
              paddingLeft: "2px",
              marginRight: "15px",
              alignItems: "center",
              borderRadius: "50%",
              fontSize: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
            }}> ❯ </i>
          ) : null
        }
        indicators={false}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index} style={{ height: "285px", width: "99%" }}>
            <img
              className="d-block w-100 card-img-top"
              src={image}
              alt={`Image ${index}`}
              style={{
                position: "relative",
                right: "28px",
                borderRadius: "10px",
                height: "100%",
              }}
            />
            <ul className="lista-opcional">
              {images.map((_, idx) => (
                <li
                  key={idx}
                  className={idx === activeIndex ? "active" : ""}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </ul>
          </Carousel.Item>
        ))}
      </Carousel>
      <div
        className="card-body"
        style={{ position: "relative", bottom: "40px" }}
      >
        <span>
          <i
            className={isLiked ? "bi bi-heart-fill" : "bi bi-heart"}
            style={heartIconStyle}
            onClick={toggleLike}
          ></i>
        </span>
        <h5 className="card-title" style={{ fontSize: "1rem" }}>
          {ubicacion}
        </h5>
        <p className="card-text" style={{ fontSize: "0.8rem" }}>
          Distancia: {distancia}
        </p>
        <p className="card-text" style={{ fontSize: "0.8rem" }}>
          Fechas: {dias}
        </p>
        <p className="card-text" style={{ fontSize: "0.8rem" }}>
          Precio: <span style={{ fontWeight: "bold" }}>{precio}</span> noche
        </p>
      </div>
    </div>  
  );
};

const DataCards = ({ data }) => {
  return (
<div className="Container">
<div
      className="row"
      style={{ paddingBottom: "5rem", marginTop: "12rem" }}
    >
      {data.map((item, index) => (
        <div className="col-3" key={index}>
          <CardComponent images={item.images} {...item} />
        </div>
      ))}
    </div>
</div>
  );
};

export default DataCards;
