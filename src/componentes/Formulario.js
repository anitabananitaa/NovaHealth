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
      <div class="contenedor">
        <form action="" onsubmit="mostrarDatos(); return false;">
          <h1>Registro de Pacientes</h1>
          <div class="formulario">
            <input type="text" id="inputb" placeholder="Name" required />
          </div>
          <div class="formulario">
            <input
              type="text"
              id="inputc"
              placeholder="DNI"
              pattern="[0-9]{8}"
              required
            />
          </div>
          <div class="formulario">
            <input type="date" id="inpute" placeholder="FechaNac" required />
          </div>
          <div class="formulario">
            <input type="text" id="Telefono" placeholder="Telefono" required />
          </div>
          <button
            type="button"
            class="btn"
            onclick="validarContraseña()"
            id="crear"
            required
          >
            Create
          </button>
          <button
            type="button"
            class="btn"
            onclick="goBack()"
            id="volver"
            required
          >
            Come Back
          </button>
        </form>
      </div>
    );
  }
}
export default Formulario;
