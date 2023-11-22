import React, { Component } from "react";
import axios from 'axios';
const url = "https://72a.ctpoba.ar/api";

class FormularioFinalizar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_llamado: null,
      diagnostico: "",
      tratamiento: ""
    };
  }

  componentDidMount(){
    if(this.props.datos !== null){
      this.setState({
        ID_llamado: this.props.datos.ID_llamado,
        diagnostico: this.props.datos.diagnostico,
        tratamiento:this.props.datos.tratamiento
      })
    }
  }

  salir = () => {
    this.setState({
      ID_llamado: null,
      diagnostico: "",
      tratamiento: ""
    });
    this.props.salir();
  };

  guardarPut(llamado){
    const config = {
      params: {ID_llamado: llamado.ID_llamado}
    }
    console.log(llamado);
    axios.put(url + '/llamados/finalizar', llamado, config)
    .then((res) => {
      console.log(llamado);
    // Maneja la respuesta del servidor si es necesario
    console.log("Llamado finalizado con éxito:", res.data);
    this.limpiarFormulario();
  })
  .catch((error) => {
    // Maneja errores si es necesario
    console.error("Error al finalizar el llamado:", error);
    this.props.salir();
  });
}  
limpiarFormulario() {
  this.setState({
    ID_llamado: null,
    diagnostico: "",
    tratamiento: ""
  });
  this.props.salir();
}

guardar(){
    if (this.state.ID_llamado !== undefined && this.state.ID_llamado !==null)
  {
    const llamado = {
      ID_llamado: this.state.ID_llamado,
      diagnostico: this.state.diagnostico,
      tratamiento:this.state.tratamiento
    }
    this.guardarPut(llamado)
  }    
      else
      {
        console.log("El ID del llamado es inválido:", this.state.ID_llamado)
      }  
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };     
    
  render() {
    return (
      <div className="modal">
        <div className="contenedor2">
        <h1>Finalizar Llamado</h1>
          <div className="formulario">
            <span>
              Diagnóstico
              <input type="text" name="diagnostico"
                value={this.state.diagnostico}
                onChange={this.handleInputChange}/>
            </span>
          </div>
          <div className="formulario">
            <span>
              Tratamiento
              <input type="text" name="tratamiento"
                value={this.state.tratamiento}
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
            onClick={() => this.salir()}
          >
            Cancelar
          </button>
          </div>
      </div>
      
    );
  }
}
export default FormularioFinalizar;