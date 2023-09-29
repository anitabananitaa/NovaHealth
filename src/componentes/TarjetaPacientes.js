import React, { Component } from "react";
import basura from "./assets/basura.png";
import lapiz from "./assets/lapiz.png";

class TarjetaPacientes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="ContenedorTarjetas">
        <div class="Tarjetas">
          <h4>Nombre:</h4>
          <span></span>

          <h4>Apellido:</h4>
          <span></span>

          <h4>Fecha Nac.:</h4>
          <span></span>

          <h4>DNI:</h4>
          <span></span>

          <h4>Teléfono:</h4>
          <span></span>
        </div>
        <div class="botones">
          <button class="btntarjeta">
            <img src={basura} className="imagen" />
          </button>
          <button class="btntarjeta">
            <img src={lapiz} className="imagen" />
          </button>
        </div>
      </div>
    );
  }
}

export default TarjetaPacientes;
