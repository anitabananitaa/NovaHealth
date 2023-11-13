import React, { Component } from "react";
import lapiz from "./assets/lapiz.png";
import Carta from "./Carta";

class TarjetaLlamados extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const{estado, tipo, dni, nombre, apellido, descripcion, fecha_hora_llamado, fecha_hora_atencion, origen, profesional} = this.props;
    return (
      <div className="ContenedorTarjetas">
        <div className="Tarjetas">
          <h4>Estado:</h4>
          <span>{estado}</span>
          <h4>Tipo:</h4>
          <span>{tipo}</span>
          <h4>DNI:</h4>
          <span>{dni}</span>
          <h4>Nombre:</h4>
          <span>{nombre}</span>
          <h4>Apellido:</h4>
          <span>{apellido}</span>
          <h4>Descripción:</h4>
          <span>{descripcion}</span>
          <h4>Fecha/hora del llamado:</h4>
          <span>{fecha_hora_llamado}</span>
          <h4>Fecha/hora de atención:</h4>
          <span>{fecha_hora_atencion}</span>
          <h4>Profesional:</h4>
          <span>{nombre}</span>
          <h4>Origen:</h4>
          <span>{origen}</span>
        </div>
        <div className="botones">
          <button className="btntarjeta">
            <img src={lapiz} className="imagen" />
          </button>
        </div>
      </div>
    );
  }
}

export default TarjetaLlamados;
