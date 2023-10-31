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
    const {tipo, nombre, estado}= this.props;
    return (
      <div className="ContenedorTarjetas">
        <div className="Tarjetas">
          <h4>Tipo:</h4>
          <span>{tipo}</span>

          <h4>Nombre de usuario:</h4>
          <span>{nombre}</span>

          <h4>Estado:</h4>
          <span>{estado}</span>
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

export default TarjetaUsuarios;
