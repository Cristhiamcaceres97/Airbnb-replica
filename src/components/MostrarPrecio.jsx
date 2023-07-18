import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./estilos/MostrarPrecio.css";

const MostrarPrecio = () => {
  const [encendido, setEncendido] = useState(false);

  const toggleEncendido = () => {
    setEncendido(!encendido);
  };

  return (
    <div className='cuadro-precio'>
      <ul>
        <li><b>Mostrar el Precio total</b></li>
        <li className='separador'>Incluidas todas las tarifas, pero sin contar<br/>
         los impuestos</li>
        <li>
          <i
            className={`bi bi-toggle-on ${encendido ? 'encendido' : ''}`}
            onClick={toggleEncendido}
          ></i>
        </li>
      </ul>
    </div>
  );
};

export default MostrarPrecio;
