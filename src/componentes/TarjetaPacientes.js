import React, { Component } from "react";
import basura from "./assets/basura.png";
import lapiz from "./assets/lapiz.png";
import Carta from "./Carta";

class TarjetaPacientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // nombre:"",
      // apellido:"",
      // fechNa:"",
      // dni:"",
      // telefono:""
    };
  }
  
  editarDatos(){
    const paciente = {
    apellido: this.state.apellido,
    nombre: this.state.nombre,
    dni: this.state.dni,
    fecha_nac: this.state.fecha_nac,
    telefono: this.state.telefono
    }
    const config ={
      params:{ ID_pacientes: t}
    }
    axios.put(url + '/Pacientes', paciente)
    .then((res) => {
      console.log(paciente);
    // Maneja la respuesta del servidor si es necesario
    console.log("paciente editado con éxito:", res.data);
    this.props.salir();
  })
  .catch((error) => {
    // Maneja errores si es necesario
    console.error("Error al editar el paciente:", error);
    this.props.salir()
  });
  }

  render() {
    const {id,nombre, apellido, fecha_nac, dni, telefono} = this.props;// recibe los datos como propiedades
    return (
      <div className="ContenedorTarjetas">
        <div className="Tarjetas">
          <h4>Nombre:</h4>
          <span>{nombre}</span>

          <h4>Apellido:</h4>
          <span>{apellido}</span>

          <h4>Fecha Nac.:</h4>
          <span>{fecha_nac}</span>

          <h4>DNI:</h4>
          <span>{dni}</span>

          <h4>Teléfono:</h4>
          <span>{telefono}</span>
        </div>
        <div className="botones">
          <button className="btntarjeta" onClick={() => this.props.onEliminarTarjeta(this.props.id)}>
            <img src={basura} className="imagen" />
          </button>
          <button className="btntarjeta" onClick={() => this.props.onEditarDatos(this.props)}>
            <img src={lapiz} className="imagen" />
          </button>
        </div>
      </div>
    );
  }
}

export default TarjetaPacientes;
