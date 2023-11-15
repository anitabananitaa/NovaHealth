import React, { Component } from "react";
import lapiz from "./assets/lapiz.png";
import Carta from "./Carta";
import FormularioLlamados from "./FormularioLlamados";

class TarjetaLlamados extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  editarDatos(){
    const llamado = {
      estado: this.state.estado,
      tipo: this.state.tipo,
      dni: this.state.dni,
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      descripcion: this.state.descripcion,
      fecha_hora_llamado: this.state.fecha_hora_llamado,
      fecha_hora_atencion: this.state.fecha_hora_atencion,
      profesional: this.state.profesional,
      origen: this.state.origen
    }
    const config ={
      params:{ ID_llamado: t}
    }
    axios.put(url + '/llamados', llamado)
    .then((res) => {
      console.log(llamado);
    // Maneja la respuesta del servidor si es necesario
    console.log("llamado editado con éxito:", res.data);
    this.props.salir();
  })
  .catch((error) => {
    // Maneja errores si es necesario
    console.error("Error al editar el llamado:", error);
    this.props.salir()
  });
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
          <button className="btntarjeta" onClick={() => this.props.onEditarDatos(this.props)}>
            <img src={lapiz} className="imagen" />
          </button>
        </div>
      </div>
    );
  }
}

export default TarjetaLlamados;
