import React, { Component } from "react";
import Input from "./Input";
//const url = "http://192.168.0.76:3201/api";
const url="http://10.0.14.190:3201/api";
import axios from 'axios';

class FormularioZonas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descripcion: "",
      tipo: "",
      disponibilidad: "Disponible"
    };
  }

  guardar(){
        const zona = {
      descripcion: this.state.descripcion,
      tipo: this.state.tipo,
      disponibilidad: this.state.disponibilidad
    }
    axios.post(url + '/zonas', zona)
    .then((res) => {
      console.log(zona);
    // Maneja la respuesta del servidor si es necesario
    console.log("Zona registrada con éxito:", res.data);
    this.props.salir();
  })
  .catch((error) => {
    // Maneja errores si es necesario
    console.error("Error al registrar la zona:", error);
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
          <h1>Registro de Zonas</h1>
          <div className="formulario">
            <span>
              Descripción
              <input type="text" name="descripcion"
                value={this.state.descripcion}
                onChange={this.handleInputChange}/>
            </span>
          </div>
          <div className="formulario">
            <span>
              Tipo
              <input type="text" name="tipo"
                value={this.state.tipo}
                onChange={this.handleInputChange}/>
            </span>
          </div>
          <div className="formulario">
            <span>
              Disponibilidad
              <select className="mi-select" name="disponibilidad"
                value={this.state.disponibilidad}
                onChange={this.handleInputChange}>
                <option value="opcion1">Disponible</option>
                <option value="opcion2">Ocupada</option>
              </select>
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
export default FormularioZonas;
