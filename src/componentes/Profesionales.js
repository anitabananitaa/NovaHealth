import React, { Component } from "react";
import TarjetaProfesionales from "./TarjetaProfesionales";
import Carta from "./Carta";
import FormularioProfesionales from "./FormularioProfesionales";
class Profesionales extends Component {
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
      <div className="profesionales">
        {this.state.showFormulario &&
          <FormularioProfesionales
            salir={()=>this.showFormulario()}
          />
        }
        <Carta showFormulario={()=> this.showFormulario()}>
          <TarjetaProfesionales />
        </Carta>
      </div>
    );
  }
}

export default Profesionales;
