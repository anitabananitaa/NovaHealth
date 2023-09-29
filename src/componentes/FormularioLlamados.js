import React, { Component } from "react";
import Input from "./Input";
import "../styles.css";

class FormularioLlamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  render() {
    return (
      <div class="contenedor2">
        <h1>Registro de Llamados</h1>
        <div class="formulario">
          <span>
            Estado:
            <select class="miSelect">
              <option class="edit" value="opcion1">
                Pendiente
              </option>
              <option class="edit" value="opcion2">
                Atendido
              </option>
              <option class="edit" value="opcion2">
                Finalizado
              </option>
            </select>
          </span>
        </div>
        <div class="formulario">
          <span>
            Tipo:
            <select class="miSelect">
              <option value="opcion1">Urgente</option>
              <option value="opcion2">No Urgente</option>
            </select>
          </span>
        </div>

        <div class="formulario">
          <span>
            Nombre:
            <input type="text" id="inputb" required />
          </span>
        </div>

        <div class="formulario">
          <span>
            Apellido:
            <input type="text" id="inputc" pattern="{0-9}" required />
          </span>
        </div>

        <div class="formulario">
          <span>
            DNI:
            <input type="text" id="inputc" pattern="{0-9}" required />
          </span>
        </div>

        <div class="formulario">
          <span>
            Zona:
            <input type="text" id="inputc" pattern="[0-9]{8}" required />
          </span>
        </div>

        <div class="formulario">
          <span>
            Fecha-Hora del Llamado:
            <input type="text" id="inputc" pattern="{0-9}" required />
          </span>
        </div>

        <div class="formulario">
          <span>
            Fecha-Hora de Atencion:
            <input type="text" id="inputc" required />
          </span>
        </div>

        <div class="formulario">
          <span>
            Profesional:
            <input type="text" id="inputc" required />
          </span>
        </div>

        <div class="formulario">
          <span>
            Origen:
            <input type="text" id="inputc" required />
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
export default FormularioLlamados;
