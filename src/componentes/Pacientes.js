import React, { Component } from "react";
import TarjetaPacientes from "./TarjetaPacientes";
import Carta from "./Carta";
class Pacientes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="pacientes">
        <Carta>
          <TarjetaPacientes />
        </Carta>
      </div>
    );
  }
}

export default Pacientes;
