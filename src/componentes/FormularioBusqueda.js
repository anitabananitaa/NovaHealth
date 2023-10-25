import React, { Component } from "react";
import Input from "./Input";


class FormularioBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
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
          <h1>Busqueda DNI</h1>
          <div className="formulario">
            <span>
              DNI:
              <input type="text" 
            />
            </span>
          </div>

          
            <button 
            type="button" 
            className="btn"
            onClick={()=> this.guardar()}
            >
              Buscar
            </button>
            <button 
            type="button" 
            className="btn" 
            onClick={()=> this.props.salir()}>
              Cancelar
            </button>
        
        </div>
      </div>
    );
  }
}
export default FormularioBusqueda;
