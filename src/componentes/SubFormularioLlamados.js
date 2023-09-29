import React, { Component } from "react";
import Input from "./Input";
import "../styles.css";

class SubFormularioLlamado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  render() {
    return (
      <div class="contenedor2">
          <h1>Llamado Azul</h1>
          <div class="formulario">
            <span>
              DNI:
              <input type="text" id="inputb" required />
            </span>
          </div>
          <div class="formulario">
            <span>
              Estado :
              <select class="miSelect">
                <option class="edit" value="opcion1">
                  Activo
                </option>
                <option class="edit" value="opcion2">
                  Inactivo
                </option>
              </select>
            </span>
          </div>
          <div class="formulario">
            <span>
              Tipo :
              <select class="miSelect">
                <option value="opcion1">Urgente</option>
                <option value="opcion2">No Urgente</option>
              </select>
            </span>
          </div>
        <div class="botones">
          <button
            type="button"
            class="btn"
            id="crear"
            required
          >
            Aceptar
          </button>
          <button
            type="button"
            class="btn"
            id="volver"
            required
          >
            Cancelar
          </button>
          </div>
      </div>
    );
  }
}
export default SubFormularioLlamado;