import React, { Component } from "react";
import Input from "./Input";
import axios from 'axios';

const url = "https://72a.ctpoba.ar/api";

class FormularioProfesionales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_profesional:null,
      nombre:"",
      apellido:"",
      dni:"",
      especialidad:"enfermero",
      telefono:""
    };
  }

  salir = () => {
    this.setState({
      ID_profesional: null,
      nombre: "",
      apellido: "",
      dni:"",
      especialidad:"enfermero",
      telefono:""
    });
    this.props.salir();
  };


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
  guardarPost(profesional){
    axios.post(url + '/profesionales', profesional)
    .then((res) => {
      console.log(profesional);
    // Maneja la respuesta del servidor si es necesario
    console.log("Profesional registrado con éxito:", res.data);
    this.limpiarFormulario();
  })
  .catch((error) => {
    // Maneja errores si es necesario
    console.error("Error al registrar el Profesional:", error);
    this.props.salir()
  });
  }

  guardarPut(profesional){
    const config = {
      params: {ID_profesional: profesional.ID_profesional}
    }
    console.log(profesional);
    axios.put(url + '/profesionales', profesional, config)
    .then((res) => {
      console.log(profesional);
    // Maneja la respuesta del servidor si es necesario
    console.log("Profesional registrado con éxito:", res.data);
    this.limpiarFormulario();
  })
  .catch((error) => {
    // Maneja errores si es necesario
    console.error("Error al registrar al profesional:", error);
    this.props.salir()
  });
  }

  limpiarFormulario() {
    this.setState({
      ID_profesional: null,
      nombre: "",
      apellido: "",
      dni:"",
      especialidad:"enfermero",
      telefono:""
    });
    this.props.salir();
  }

  guardar(){

    if (this.state.ID_profesional !== undefined && this.state.ID_profesional !==null)
    {
      const profesional = {
        ID_profesional:this.state.ID_profesional,
        nombre:this.state.nombre,
        apellido:this.state.apellido,
        dni:this.state.dni,
        especialidad:this.state.especialidad,
        telefono:this.state.telefono
      }
      this.guardarPut(profesional)
    }    
        else
        {
          const profesional = {
            nombre:this.state.nombre,
            apellido:this.state.apellido,
            dni:this.state.dni,
            especialidad:this.state.especialidad,
            telefono:this.state.telefono
          }
          this.guardarPost(profesional)
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
              <option value="enfermero">Enfermero</option>
              <option value="medico">Medico</option>
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
            onClick={()=> this.salir()}  
          >
            Cancelar
          </button>
      </div>
      </div>
    );
  }
}
export default FormularioProfesionales;
