import React, { Component } from "react";
import Input from "./Input";
import axios from 'axios';
// const url = "http://192.168.1.16:3201/api";
const url = "http://10.0.3.91:3201/api";

class FormularioZonas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_zonas:null,
      descripcion: "",
      tipo: "",
      disponibilidad: "Disponible"
    };
  }

  componentDidMount(){
    if(this.props.datos !== null){
      this.setState({
        ID_zonas:this.props.datos.id,
        descripcion:this.props.datos.descripcion,
        tipo:this.props.datos.tipo,
        disponibilidad:this.props.datos.disponibilidad
      })
    }
  }

  guardar(){
    // verificar id en props
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
