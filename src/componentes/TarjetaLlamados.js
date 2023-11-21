import React, { Component } from "react";
import lapiz from "./assets/lapiz.png";
import Carta from "./Carta";
import FormularioLlamados from "./FormularioLlamados";
import axios from "axios";

class TarjetaLlamados extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    const{estado, tipo, dni, nombre, apellido, zona, fecha_hora_llamado, fecha_hora_atencion, profesional, diagnostico, tratamiento} = this.props;
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
          <h4>Zona:</h4>
          <span>{zona}</span>
          <h4>Fecha/hora del llamado:</h4>
          <span>{fecha_hora_llamado}</span>
          <h4>Fecha/hora de atención:</h4>
          <span>{fecha_hora_atencion}</span>
          <h4>Profesional:</h4>
          <span>{profesional}</span>
          <h4>Diagnostico:</h4>
          <span>{diagnostico}</span>
          <h4>Tratamiento:</h4>
          <span>{tratamiento}</span>
        </div>
        <div className="botones">
          {estado === "Pendiente" &&
            <button className="btntarjetallamado" onClick={() => this.props.onAtender(this.props.ID_llamado)}>
            
              Atender
            </button>
          }
          {estado === "Atendiendo" &&
            <button className="btntarjetallamado2" >
            
              Finalizar
            </button>
          }
        </div>
      </div>
    );
  }
}

export default TarjetaLlamados;
