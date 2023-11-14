import React, { Component } from "react";
import basura from "./assets/basura.png";
import lapiz from "./assets/lapiz.png";
import Carta from "./Carta";
import FormularioProfesionales from "./FormularioProfesionales";

class TarjetaProfesionales extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
    const { id, nombre, apellido, dni, especialidad, telefono} = this.props;// recibe los datos como propiedades
    return (
      <div className="ContenedorTarjetas">
        <div className="Tarjetas">
          <h4>Nombre:</h4>
          <span>{nombre}</span>

          <h4>Apellido:</h4>
          <span>{apellido}</span>

          <h4>DNI:</h4>
          <span>{dni}</span>

          <h4>Especialidad:</h4>
          <span>{especialidad}</span>

          <h4>Teléfono:</h4>
          <span>{telefono}</span>
        </div>
        <div className="botones" >
        <button className="btntarjeta" onClick={() => this.props.onEliminarTarjeta(this.props.id)}>
            <img src={basura} className="imagen" />
          </button>
          <button className="btntarjeta"  onClick={() => this.props.onEditarDatos(this.props)}>
            <img src={lapiz} className="imagen" />
          </button>
        </div>
      </div>
    );
  }
}

export default TarjetaProfesionales;
