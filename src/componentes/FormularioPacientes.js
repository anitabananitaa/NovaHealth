import React, { Component } from "react";
import Input from "./Input";
import axios from 'axios';
// const url = "http://192.168.1.16:3201/api";

const url = "http://192.168.0.76:3201/api";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_zonas:null,
      apellido: "",
      nombre: "",
      dni: "",
      fecha_nac: "",
      telefono: "",

    };
  }
  componentDidMount(){
    if(this.props.datos !== null){
      this.setState({
        ID_paciente:this.props.datos.id,
        nombre:this.props.datos.nombre,
        apellido:this.props.datos.apellido,
        dni:this.props.datos.dni,
        fecha_nac:this.props.datos.fecha_nac,
        telefono:this.props.datos.telefono
      })
    }
  }

  guardar(){
    const paciente = {
    apellido: this.state.apellido,
    nombre: this.state.nombre,
    dni: this.state.dni,
    fecha_nac: this.state.fecha_nac,
    telefono: this.state.telefono
    }
    axios.post(url + '/Pacientes', paciente)
    .then((res) => {
    console.log(paciente);
    // Maneja la respuesta del servidor si es necesario
    console.log("paciente registrado con éxito:", res.data);
    this.props.salir();
    })
    .catch((error) => {
    // Maneja errores si es necesario
    console.error("Error al registrar la paciente:", error);
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
          <h1>Registro de Pacientes</h1>
          <div className="formulario">
            <span>
              Apellido
              <input type="text"  name="apellido"
                value={this.state.apellido}
                onChange={this.handleInputChange}/>
            </span>
          </div>
          <div className="formulario">
            <span>
              Nombre
              <input type="text"   name="nombre"
                value={this.state.nombre}
                onChange={this.handleInputChange}/>
            </span>
          </div>

          <div className="formulario">
            <span>
              DNI
              <input type="text"  pattern="[0-9]"   name="dni"
                value={this.state.dni}
                onChange={this.handleInputChange}/>
            </span>
          </div>
          <div className="formulario">
            <span>
              Fecha Nac.
              <input type="date"  placeholder="FechaNac"  name="fecha_nac"
                value={this.state.fecha_nac}
                onChange={this.handleInputChange}/>
            </span>
          </div>
          <div className="formulario">
            <span>
              Telefono
              <input type="text"   name="telefono"
                value={this.state.telefono}
                onChange={this.handleInputChange}/>
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
      </div>
    );
  }
}
export default Formulario;
