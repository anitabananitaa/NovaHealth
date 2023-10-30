import React, { Component, useState } from "react";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desplegar: false,
    };
  }
  desplegar() {
    this.setState({ desplegar: !this.state.desplegar });
  }

  setPantalla(pant) {
    this.props.cambiarPantalla(pant);
  }
  render() {
    return (
      <div className="botondesplegable">
        <button onClick={() => this.desplegar()} className="toggle-button">
          ☰
        </button>
        {this.state.desplegar && (
          <ul className="alinear-texto">
            <li onClick={() => this.setPantalla(1)}>Llamados</li>
            <li onClick={() => this.setPantalla(2)}>Zonas</li>
            <li onClick={() => this.setPantalla(3)}>Pacientes</li>
            <li onClick={() => this.setPantalla(4)}>Profesionales</li>
            <li onClick={() => this.setPantalla(5)}>Usuarios</li>
          </ul>
        )}
      </div>
    );
  }
}
