import React, { Component } from "react";
import Input from "./Input";
import "../styles.css";

class FormularioUsuarios extends Component {
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
          <h1>Registro de Usuarios</h1>
          <div class="formulario">
            <span>
              Nombre
              <input type="text" id="inputb" required />
            </span>
          </div>

          <div class="formulario">
            <span>
              Contraseña
              <input type="password" id="inputc" pattern="[0-9]{8}" required />
            </span>
          </div>
          <div class="formulario">
            <span>
              Estado
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
              Tipo
              <select class="miSelect">
                <option value="opcion1">Administrador</option>
                <option value="opcion2">Agente</option>
              </select>
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
export default FormularioUsuarios;
