import React, { Component } from "react";
import basura from "./assets/basura.png";
import lapiz from "./assets/lapiz.png";
import Carta from "./Carta";

class TarjetaUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    const {tipo, nombre}= this.props;
    return (
      <div className="ContenedorTarjetas">
        <div className="Tarjetas">
          <h4>Tipo:</h4>
          <span>{tipo}</span>

          <h4>Nombre de usuario:</h4>
          <span>{nombre}</span>
        </div>
        <div className="botones">
          <button className="btntarjeta" onClick={() => this.props.onEliminarTarjeta(this.props.id)}>
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
