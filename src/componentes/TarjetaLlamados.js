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
  editarDatos(){
    const llamado = {
      estado: this.props.estado,
      tipo: this.props.tipo,
      dni: this.props.dni,
      nombre: this.props.nombre,
      apellido: this.props.apellido,
      descripcion: this.props.descripcion,
      fecha_hora_llamado: this.props.fecha_hora_llamado,
      fecha_hora_atencion: this.props.fecha_hora_atencion,
      profesional: this.props.profesional,
      origen: this.props.origen,
      diagnostico: this.props.diagnostico,
      tratamiento: this.props.tratamiento

    }
    const config ={
      params: { ID_llamado: this.props.ID_llamado  }
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
          <span>{nombre}</span>
          <span>{profesional}</span>
          <h4>Diagnostico:</h4>
          <span>{diagnostico}</span>
          <h4>Tratamiento:</h4>
          <span>{tratamiento}</span>
        </div>
        <div className="botones">
          {estado === "Pendiente" &&
            <button className="btntarjeta" onClick={() => this.props.onAtender(this.props.ID_llamado)}>
            
              Atender
            </button>
          }
          {estado === "Atendiendo" &&
            <button className="btntarjeta" >
            
              Finalizar
            </button>
          }
        </div>
      </div>
    );
  }
}

export default TarjetaLlamados;
