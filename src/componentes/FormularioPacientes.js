import React, { Component } from "react";
import Input from "./Input";
class Formulario extends Component {
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
          <h1>Registro de Pacientes</h1>
          <div className="formulario">
            <span>
              Apellido
              <input type="text"/>
            </span>
          </div>
          <div className="formulario">
            <span>
              Nombre
              <input type="text"  />
            </span>
          </div>

          <div className="formulario">
            <span>
              DNI
              <input type="text"  pattern="[0-9]"  />
            </span>
          </div>
          <div className="formulario">
            <span>
              Fecha Nac.
              <input type="date"  placeholder="FechaNac" />
            </span>
          </div>
          <div className="formulario">
            <span>
              Telefono
              <input type="text"  />
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
export default Formulario;
