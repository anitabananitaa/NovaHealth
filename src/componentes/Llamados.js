import React, { Component } from "react";
import TarjetaLlamados from "./TarjetaLlamados";
import Carta from "./Carta";
import FormularioBusqueda from "./FormularioBusqueda";

class Llamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormulario: false,
    };
  }

  showFormulario(){
    this.setState({showFormulario: !this.state.showFormulario})
  }

  render() {

    return (
      <div className="llamados">
      {this.state.showFormulario &&
        <FormularioBusqueda
          salir={()=>this.showFormulario()}
        />
      }
      <Carta showFormulario={()=> this.showFormulario()}>
        <TarjetaLlamados />

      </Carta>
    </div>
    );
  }
}

export default Llamados;
