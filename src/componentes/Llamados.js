import React, { Component } from "react";
import TarjetaLlamados from "./TarjetaLlamados";
import Carta from "./Carta";
class Llamados extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="llamados">
        <Carta>
          <TarjetaLlamados />
        </Carta>
      </div>
    );
  }
}

export default Llamados;
