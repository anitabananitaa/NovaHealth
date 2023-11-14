import React, { Component } from "react";
import basura from "./assets/basura.png";
import lapiz from "./assets/lapiz.png";
import Carta from "./Carta";
import FormularioZonas from "./FormularioZonas";

class TarjetaZonas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  render() {
    const{ id, tipo, descripcion, disponibilidad } = this.props; // Recibe los datos como propiedades
    const traducirDisponibilidad = (disponibilidad) => {
      return disponibilidad === 1 ? "disponible" : "ocupada";};
    return (
      <div className="ContenedorTarjetas">
        <div className="Tarjetas">
          <h4>Tipo:</h4>
          <span>{tipo}</span>
          <h4>Descripción:</h4>
          <span> {descripcion}</span>
          <h4>disponibilidad:</h4>
          <span> {traducirDisponibilidad(disponibilidad)}</span>
        </div>
        <div className="botones">
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
export default TarjetaZonas;
