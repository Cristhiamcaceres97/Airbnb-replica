import React from "react";
import { Switch, Spacer } from "@nextui-org/react";
import "bootstrap/dist/css/bootstrap.css";
import "./estilos/MostrarPrecio.css";

const MostrarPrecio = () => {
  return (
    <div className="cuadro-precio">
      <ul>
        <li>
          <b>Mostrar el Precio total</b>
        </li>
        <li className="separador">
          Incluidas todas las tarifas, pero sin contar los impuestos
        </li>
        <li style={{ position: "relative", bottom: "27px", left: "20px" }}>
          <Spacer />
          <Switch checked={true} size="xl" />
        </li>
      </ul>
    </div>
  );
};

export default MostrarPrecio;
