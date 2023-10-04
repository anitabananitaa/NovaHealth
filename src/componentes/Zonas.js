import React, { Component } from "react";
import TarjetaZonas from "./TarjetaZonas";
import Carta from "./Carta";
import FormularioZonas from "./FormularioZonas";
class Zonas extends Component {
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
      <div className="zonas">
        {this.state.showFormulario &&
          <FormularioZonas
            salir={()=>this.showFormulario()}
          />
        }
        <Carta showFormulario={()=> this.showFormulario()}>
          <TarjetaZonas />
          <TarjetaZonas />
          <TarjetaZonas />
          <TarjetaZonas />
          <TarjetaZonas />
          <TarjetaZonas />
        </Carta>
      </div>
    );
  }
}

export default Zonas;
