import React, { Component } from "react";
import Input from "./Input";


class FormularioZonas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  guardar(){
    //
    this.props.salir()
  }

  render() {
    return (
      <div className="modal">
        <div className="contenedorFormulario">
          <h1>Registro de Zonas</h1>
          <div className="formulario">
            <span>
              Descripción
              <input type="text"/>
            </span>
          </div>

          <div className="formulario">
            <span>
              tipo
              <select className="mi-select">
                <option value="opcion1">Activo</option>
                <option value="opcion2">Inactivo</option>
              </select>
            </span>
          </div>

          <button 
            type="button" 
            className="btn" 
            
            onClick={()=> this.guardar()}
          >
            Aceptar
          </button>
          <button 
            type="button" 
            className="btn" 
             
            onClick={()=> this.props.salir()}  
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  }
}
export default FormularioZonas;
