import React, { Component } from "react";
import TarjetaUsuarios from "./TarjetaUsuarios";
import Carta from "./Carta";
import FormularioUsuarios from "./FormularioUsuarios";

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormulario: false
    };
  }

  
  showFormulario(){
    this.setState({showFormulario: !this.state.showFormulario})
  }

  render() {
    return (
      <div className="usuarios">
         {this.state.showFormulario &&
          <FormularioUsuarios
            salir={()=>this.showFormulario()}
          />
        }
        <Carta showFormulario={()=> this.showFormulario()}>
          <TarjetaUsuarios />
        </Carta>
      </div>
    );
  }
}

export default Usuarios;
