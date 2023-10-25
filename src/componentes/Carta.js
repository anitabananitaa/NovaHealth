import React, { Component } from "react";

class Carta extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Carta">
        <div className="Agregar">
          <button 
            onClick={()=> this.props.showFormulario()}
            className="BotonDeAgregar"
          > 
            + 
          </button>
        </div>
        <div className="CartaContenedor">{this.props.children} </div>
      </div>
    );
  }
}

export default Carta;
