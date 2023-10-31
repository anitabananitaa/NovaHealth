import React, { Component } from "react";
import Input from "./Input";
const url="http://10.0.14.190:3201/api";
import axios from 'axios';


class FormularioUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      
    };
  }
  guardar(){
    //
    this.props.salir()
  }


  render() {
    return (
      <div className="modal">
      <div className="contenedorFormulario">
        <h1>Registro de Usuarios</h1>
        <div className="formulario">
          <span>
            Nombre
            <input type="text"/>
          </span>
        </div>

        <div className="formulario">
          <span>
            Contraseña
            <input type="password" pattern="[0-9]{8}" />
          </span>
        </div>
        <div className="formulario">
          <span>
            Estado
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
            Tipo
            <select className="miSelect">
              <option value="opcion1">Administrador</option>
              <option value="opcion2">Agente</option>
            </select>
          </span>
        </div>
        <button type="button" className="btn"  onClick={()=> this.guardar()}>
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
export default FormularioUsuarios;
