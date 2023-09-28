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
  render() {
    return (
      <div class="botondesplegable">
        <button onClick={() => this.desplegar()} className="toggle-button">
          ☰
        </button>
        {this.state.desplegar && (
          <ul>
            <li>Zonas</li>
            <li>Pacientes</li>
            <li> Profesionales</li>
            <li>Llamados</li>
            <li>Usuarios</li>
          </ul>
        )}
      </div>
    );
  }
}
