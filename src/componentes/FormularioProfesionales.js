import React, { Component } from "react";
import Input from "./Input";
import "../styles.css";

class FormularioProfesionales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  render() {
    return (
      <div class="contenedor2">
        <form action="" onsubmit="mostrarDatos(); return false;">
          <h1>Formulario de Profesionales</h1>
          <div class="formulario">
            <span>
              Nombre
              <input type="text" id="inputb" required />
            </span>
          </div>
          <div class="formulario">
            <span>
              Apellido
              <input type="text" id="inputb" required />
            </span>
          </div>

          <div class="formulario">
            <span>
              DNI
              <input type="text" id="inputc" pattern="[0-9]{8}" required />
            </span>
          </div>
          <div class="formulario">
            <span>
              Especialidad
              <select class="mi-select">
                <option value="opcion1">Medico</option>
                <option value="opcion2">Enfermero</option>
              </select>
            </span>
          </div>
          <div class="formulario">
            <span>
              Telefono
              <input type="text" id="Telefono" required />
            </span>
          </div>
          <button
            type="button"
            class="btn"
            onclick="validarContraseña()"
            id="crear"
            required
          >
            Aceptar
          </button>
          <button
            type="button"
            class="btn"
            onclick="goBack()"
            id="volver"
            required
          >
            Cancelar
          </button>
        </form>
      </div>
    );
  }
}
export default FormularioProfesionales;
