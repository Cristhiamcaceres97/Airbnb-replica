import React from "react";

const CardComponent = ({ img, ubicacion, distancia, dias, precio }) => {
  return (
    <div className="card border-0" style={{ width: "18rem", marginTop: "2rem" }}>
      <div style={{ overflow: "hidden", width: "100%", height: "300px" }}>
        <img
          src={img}
          className="card-img-top"
          alt="Ubicación"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
      <div className="card-body">
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
    <div className="row g-1">
      {data.map((item, index) => (
        <div className="col-3" key={index}>
          <CardComponent {...item} />
        </div>
      ))}
    </div>
  );
};

export default DataCards;
