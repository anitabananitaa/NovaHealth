import React, { Component } from "react";
import Input from "./Input";
import "../styles.css";

class FormularioBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  render() {
    return (
      <div class="contenedorFormulario">
        <h1>Busqueda DNI</h1>
        <div class="formulario">
          <span>
            DNI:
            <input type="text" id="inputb" required />
          </span>
        </div>

        <div>
          <button type="button" class="btn" id="crear" required>
            Buscar
          </button>
          <button type="button" class="btn" id="crear" required>
            Cancelar
          </button>
        </div>
      </div>
    );
  }
}
export default FormularioBusqueda;
