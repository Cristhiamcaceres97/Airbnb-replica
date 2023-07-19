import React from 'react';
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const Footer = () => {
  return (
    <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", position: "fixed", bottom: 0, left: 0, width: "100%", backgroundColor: "#ffffff", borderTop: "1px solid #bebebe", zIndex: 999, marginTop: "10px" }}>
      <div>
        © 2023 Airbnb, Inc.  ·   Privacidad  ·    Términos  ·   Mapa del sitio   ·    Datos de la empresa
      </div>
      <div>
        <span style={{ marginRight: "10px" }}> <button className="bi bi-globe" style={{ border: "none", background: "transparent" }}></button>Español (CO)</span>
        <span style={{ marginRight: "10px" }}>Selecciona una moneda</span>
        <span style={{ marginRight: "10px" }}>$</span>
        <span style={{ marginRight: "10px" }}>COP</span>
        <span>Asistencia y recursos</span>
        <KeyboardArrowUpIcon />
      </div>
    </footer>
  );
}

export default Footer;
