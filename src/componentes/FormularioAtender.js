import React, { Component } from "react";
import axios from 'axios';
const url = "https://72a.ctpoba.ar/api";

class FormularioAtender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_llamado: null,
      ID_profesional:0
    };
  }

  componentDidMount() {
    // Verifica si this.props.datos está definido antes de intentar acceder a sus propiedades
    if (this.props.datos && this.props.datos.ID_llamado) {
      this.setState({
        ID_llamado: this.props.datos.ID_llamado,
        ID_profesional: this.props.datos.ID_profesional
      });
    }
  }

  salir = () => {
    this.setState({
      ID_llamado: null,
      ID_profesional: 0
    });
    this.props.salir();
  };

  guardarPut(llamado){
    const config = {
      params: {ID_llamado: llamado.ID_llamado}
    }
    console.log(llamado);
    axios.put(url + '/llamados/atender', llamado, config)
    .then((res) => {
      console.log(llamado);
    // Maneja la respuesta del servidor si es necesario
    console.log("Llamado atendido con éxito:", res.data);
    this.limpiarFormulario();
  })
  .catch((error) => {
    // Maneja errores si es necesario
    console.error("Error al atender el llamado:", error);
    this.props.salir();
  });
}  
limpiarFormulario() {
  this.setState({
    ID_llamado: null,
    ID_profesional: 0
  });
  this.props.salir();
}

guardar() {
  if (this.state.ID_llamado !== undefined && this.state.ID_llamado !== null) {
    const llamado = {
      ID_llamado: this.state.ID_llamado,
      ID_profesional: this.props.datos.ID_profesional
    };
    this.guardarPut(llamado);
  } else {
    console.log("El ID del llamado es inválido:", this.state.ID_llamado);
  }
}

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };     
    
  render() {
      const { profesionales } = this.props;    
      console.log("Profesionales:", profesionales);
      return (
      <div className="modal">
        <div className="contenedorFormulario">
        <h1>Atendiendo Llamado</h1>
          <div className="formulario">
            <span>
              Profesional
              <select
                className="miSelect"
                value={this.state.ID_profesional}
                onChange={(e) => this.setState({ ID_profesional: e.target.value })}
                name="ID_profesional"
              >
                {profesionales && profesionales.map((profesional) => (
                <option key={profesional.ID_profesional} value={profesional.ID_profesional}>
                  {profesional.nombre}
                </option>
                ))}
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
            onClick={() => {
              this.props.hideFormularioAtender();
            }}
          >
  Cancelar
</button>
          </div>
      </div>

    );
  }
}
export default FormularioAtender;