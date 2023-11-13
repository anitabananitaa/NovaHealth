import React, { Component } from "react";
import Input from "./Input";
import axios from "axios";
const url = "https://72a.ctpoba.ar/api";

class FormularioLlamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  render() {
    return (
      <div className="modal">
        <div className="contenedorFormulario">
          <h1>Registro de Llamados</h1>
          <div className="formulario">
            <span>
              Estado:
              <select className="miSelect">
                <option className="edit" value="opcion1">
                  Pendiente
                </option>
                <option className="edit" value="opcion2">
                  Atendido
                </option>
                <option className="edit" value="opcion2">
                  Finalizado
                </option>
              </select>
            </span>
          </div>
          <div className="formulario">
            <span>
              Tipo:
              <select className="miSelect">
                <option value="opcion1">Urgente</option>
                <option value="opcion2">No Urgente</option>
              </select>
            </span>
          </div>

          <div className="formulario">
            <span>
              Nombre:
              <input type="text" i/>
            </span>
          </div>

          <div className="formulario">
            <span>
              Apellido:
              <input type="text"/>
            </span>
          </div>

          <div className="formulario">
            <span>
              DNI:
              <input type="text" />
            </span>
          </div>

          <div className="formulario">
            <span>
              Zona:
              <input type="text"  />
            </span>
          </div>

          <div className="formulario">
            <span>
              Fecha-Hora del Llamado:
              <input type="text"  />
            </span>
          </div>

          <div className="formulario">
            <span>
              Fecha-Hora de Atencion:
              <input type="text" />
            </span>
          </div>

          <div className="formulario">
            <span>
              Profesional:
              <input type="text"/>
            </span>
          </div>

          <div className="formulario">
            <span>
              Origen:
              <input type="text" />
            </span>
          </div>

          <button type="button" className="btn" >
            Aceptar
          </button>
          <button type="button" className="btn" >
            Cancelar
          </button>
        </div> 
      </div>
    );
  }
}
export default FormularioLlamados;
