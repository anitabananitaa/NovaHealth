import React, { Component } from "react";
import basura from "./assets/basura.png";
import lapiz from "./assets/lapiz.png";
import Carta from "./Carta";

class TarjetaProfesionales extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ContenedorTarjetas">
        <div className="Tarjetas">
          <h4>Nombre:</h4>
          <span></span>

          <h4>Apellido:</h4>
          <span></span>

          <h4>DNI:</h4>
          <span></span>

          <h4>Especialidad:</h4>
          <span></span>

          <h4>Teléfono:</h4>
          <span></span>
        </div>
        <div className="botones">
          <button className="btntarjeta">
            <img src={basura} className="imagen" />
          </button>
          <button className="btntarjeta">
            <img src={lapiz} className="imagen" />
          </button>
        </div>
      </div>
    );
  }
}

export default TarjetaProfesionales;
