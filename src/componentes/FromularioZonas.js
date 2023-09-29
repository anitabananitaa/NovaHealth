import React, { Component } from "react";
import Input from "./Input";
import "../styles.css";

class FormularioZonas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  render() {
    return (
      <div class="contenedorFormulario">
        <h1>Registro de Zonas</h1>
        <div class="formulario">
          <span>
            Descripción
            <input type="text" id="inputb" required />
          </span>
        </div>

        <div class="formulario">
          <span>
            tipo
            <select class="mi-select">
              <option value="opcion1">Activo</option>
              <option value="opcion2">Inactivo</option>
            </select>
          </span>
        </div>

        <button type="button" class="btn" id="crear" required>
          Aceptar
        </button>
        <button type="button" class="btn" id="volver" required>
          Cancelar
        </button>
      </div>
    );
  }
}
export default FormularioZonas;
