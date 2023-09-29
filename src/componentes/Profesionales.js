import React, { Component } from "react";
import TarjetaProfesionales from "./TarjetaProfesionales";
import Carta from "./Carta";
class Profesionales extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="profesionales">
        <Carta>
          <TarjetaProfesionales />
        </Carta>
      </div>
    );
  }
}

export default Profesionales;
