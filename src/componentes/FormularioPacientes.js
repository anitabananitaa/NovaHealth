import React, { Component } from "react";
import Input from "./Input";
import axios from 'axios';
const url = "https://72a.ctpoba.ar/api";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_paciente:null,
      nombre: "", 
      apellido: "",
      dni: "",
      fecha_nac: "",
      telefono: ""

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

  guardarPost(paciente){
    axios.post(url + '/paciente', paciente)
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

  guardarPut(paciente){
    const config = {
      params: {ID_paciente: paciente.ID_paciente}
    }
    console.log(paciente);
    axios.put(url + '/pacientes', paciente, config)
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

  guardar(){
  if (this.state.ID_paciente !== undefined && this.state.ID_paciente !==null)
{
  const paciente = {
    ID_paciente:this.state.ID_paciente,
    nombre: this.state.nombre,
    apellido: this.state.apellido,
    dni: this.state.dni,
    fecha_nac: this.state.fecha_nac,
    telefono: this.state.telefono
  }
  this.guardarPut(paciente)
}    
    else
    {
      const paciente = {
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        dni: this.state.dni,
        fecha_nac: this.state.fecha_nac,
        telefono: this.state.telefono
      }
      this.guardarPost(paciente)
    }  
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    return (
      <div className="modal">
        <div className="contenedorFormulario">
          <h1>Registro de paciente</h1>
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
