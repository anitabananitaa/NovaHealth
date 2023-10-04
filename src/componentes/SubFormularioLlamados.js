import React, { Component } from "react";
import Input from "./Input";


class SubFormularioLlamado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  render() {
    return (
      <div className="contenedor2">
          <h1>Llamado Azul</h1>
          <div className="formulario">
            <span>
              DNI:
              <input type="text"/>
            </span>
          </div>
          <div className="formulario">
            <span>
              Estado :
              <select className="miSelect">
                <option className="edit" value="opcion1">
                  Activo
                </option>
                <option className="edit" value="opcion2">
                  Inactivo
                </option>
              </select>
            </span>
          </div>
          <div className="formulario">
            <span>
              Tipo :
              <select className="miSelect">
                <option value="opcion1">Urgente</option>
                <option value="opcion2">No Urgente</option>
              </select>
            </span>
          </div>
        <div className="botones">
          <button
            type="button"
            className="btn"
      
          >
            Aceptar
          </button>
          <button
            type="button"
            className="btn"
           
          >
            Cancelar
          </button>
          </div>
      </div>
    );
  }
}
export default SubFormularioLlamado;