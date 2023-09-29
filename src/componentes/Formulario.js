import React, { Component } from "react";
import Input from "./Input";
import "../styles.css";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  render() {
    return (
      <div class="contenedorFormulario">
        <h1>Registro de Pacientes</h1>
        <div class="formulario">
          <span>
            Apellido
            <input type="text" id="inputb" required />
          </span>
        </div>
        <div class="formulario">
          <span>
            Nombre
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
            Fecha Nac.
            <input type="date" id="inpute" placeholder="FechaNac" required />
          </span>
        </div>
        <div class="formulario">
          <span>
            Telefono
            <input type="text" id="Telefono" required />
          </span>
        </div>
        <div>
          <button type="button" class="btn" id="crear" required>
            Aceptar
          </button>
          <button type="button" class="btn" id="volver" required>
            Cancelar
          </button>
        </div>
      </div>
    );
  }
}
export default Formulario;
