import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CardComponent = ({ images, ubicacion, distancia, dias, precio }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="card border-0" style={{ width: "18rem", marginTop: "2rem" }}>
      <div style={{ overflow: "hidden", width: "170%", height: "285px" }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                className="card-img-top"
                alt={`Image ${index}`}
                style={{ width: "295px", height: "285px", objectFit: "cover", borderRadius: "10px" }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: "1rem" }}>{ubicacion}</h5>
        <p className="card-text" style={{ fontSize: "0.8rem" }}>Distancia: {distancia}</p>
        <p className="card-text" style={{ fontSize: "0.8rem" }}>Fechas: {dias}</p>
        <p className="card-text" style={{ fontSize: "0.8rem" }}>Precio: <span style={{ fontWeight: "bold" }}>{precio}</span> noche</p>
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

const DataCards = ({ data }) => {
  return (
    <div className="row g-1">
      {data.map((item, index) => (
        <div className="col-3" key={index}>
          <CardComponent images={item.images} {...item} />
        </div>
      ))}
    </div>
  );
};

export default DataCards;
