import React, { Component } from "react";
import basura from "./assets/basura.png";
import lapiz from "./assets/lapiz.png";
import Carta from "./Carta";
import FormularioUsuarios from "./FormularioUsuarios";


class TarjetaUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  confirmarEliminacion = () => {
    const confirmacion = window.confirm("¿Estás seguro que quieres eliminar este usuario?");
    if (confirmacion) {
      this.props.onEliminarTarjeta(this.props.id);
    }
  };


  render() {
    const {id, tipo, nombre, estado}= this.props;
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
          <button className="btntarjeta" onClick={this.confirmarEliminacion}>
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

export default TarjetaUsuarios;
