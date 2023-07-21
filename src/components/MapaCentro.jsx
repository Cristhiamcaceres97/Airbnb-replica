import React from 'react';
import iconomapa from "../imagenes/iconomapa.png";
import "./estilos/Mapa.css";

const MapaCentro = () => {
    return (
        <div className='mapeo'>
       <button>Mostrar Mapa <img src={iconomapa} alt="" width={30} style={{marginRight: "0px"}}/></button>
      </div>
    )
};

export default MapaCentro;