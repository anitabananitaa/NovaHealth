import React, { Component } from "react";
import basura from "./assets/basura.png";
import lapiz from "./assets/lapiz.png";
import Carta from "./Carta";

class TarjetaUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="ContenedorTarjetas">
        <div class="Tarjetas">
          <h4>Tipo:</h4>
          <span></span>

          <h4>Nombre de usuario:</h4>
          <span></span>

          <h4>Contraseña:</h4>
          <span></span>

          <h4>Estado:</h4>
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

export default TarjetaUsuarios;
