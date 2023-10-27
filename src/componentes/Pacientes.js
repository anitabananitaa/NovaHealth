import React, { Component } from "react";
import TarjetaPacientes from "./TarjetaPacientes";
import Carta from "./Carta";
import FormularioPacientes from "./FormularioPacientes";

class Pacientes extends Component {
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
      <div className="pacientes"> {this.state.showFormulario &&
        <FormularioPacientes
          salir={()=>this.showFormulario()}
        />
      }
      <Carta showFormulario={()=> this.showFormulario()}>
          <TarjetaPacientes />
        </Carta>
      </div>
    );
  }
}

export default Pacientes;
