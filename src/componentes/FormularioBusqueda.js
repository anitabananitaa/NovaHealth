import React, { Component } from "react";
import Input from "./Input";


class FormularioBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  render() {
    return (
      <div className="contenedorFormulario">
        <h1>Busqueda DNI</h1>
        <div className="formulario">
          <span>
            DNI:
            <input type="text" 
          />
          </span>
        </div>

        <div>
          <button type="button" className="btn" >
            Buscar
          </button>
          <button type="button" className="btn" >
            Cancelar
          </button>
        </div>
      </div>
    );
  }
}
export default FormularioBusqueda;
