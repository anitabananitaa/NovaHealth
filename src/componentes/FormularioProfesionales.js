import React, { Component } from "react";
import Input from "./Input";
import axios from 'axios';
// const url = "http://192.168.1.16:3201/api";

const url = "http://192.168.0.76:3201/api";

class FormularioProfesionales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_profesional:null,
      nombre:"",
      apellido:"",
      dni:"",
      especialidad:"",
      telefono:""
    };
  }
  componentDidMount(){
    if(this.props.datos !== null){
      this.setState({
        ID_profesional:this.props.datos.id,
        nombre:this.props.datos.nombre,
        apellido:this.props.datos.apellido,
        dni:this.props.datos.dni,
        especialidad:this.props.datos.especialidad,
        telefono:this.props.datos.telefono
      })
    }
  }
  guardar(){
    const profesional = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      dni: this.state.dni,
      especialidad: this.state.especialidad,
      telefono: this.state.telefono
    }
  axios.post(url + '/profesionales', profesional)
    .then((res) => {
      console.log(profesional);
    // Maneja la respuesta del servidor si es necesario
    console.log("profesional registrada con éxito:", res.data);
    this.props.salir();
  })
  .catch((error) => {
    // Maneja errores si es necesario
    console.error("Error al registrar al profesional:", error);
    this.props.salir()
  });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    return (
      <div className="modal">
      <div className="contenedorFormulario">
        <h1>Formulario de Profesionales</h1>
        <div className="formulario">
          <span>
            Nombre
            <input type="text" name="nombre"
                value={this.state.nombre}
                onChange={this.handleInputChange} />
          </span>
        </div>
        <div className="formulario">
          <span>
            Apellido
            <input type="text" name="apellido"
                value={this.state.apellido}
                onChange={this.handleInputChange}/>
          </span>
        </div>

        <div className="formulario">
          <span>
            DNI
            <input type="text"  pattern="[0-9]{8}"name="dni"
                value={this.state.dni}
                onChange={this.handleInputChange}  />
          </span>
        </div>
        <div className="formulario">
          <span>
            Especialidad
            <select className="mi-select" name="especialidad"
                value={this.state.especialidad}
                onChange={this.handleInputChange}>
              <option value="opcion1">Medico</option>
              <option value="opcion2">Enfermero</option>
            </select>
          </span>
        </div>
        <div className="formulario">
          <span>
            Telefono
            <input type="text" name="telefono"
                value={this.state.telefono}
                onChange={this.handleInputChange}   />
          </span>
        </div>
        <button 
            type="button" 
            className="btn" 
            
            onClick={()=> this.guardar()}
          >
            Aceptar
          </button>
          <button 
            type="button" 
            className="btn" 
            onClick={()=> this.props.salir()}  
          >
            Cancelar
          </button>
      </div>
      /</div>
    );
  }
}
export default FormularioProfesionales;
