import React, { Component } from "react";
import TarjetaUsuarios from "./TarjetaUsuarios";
import Carta from "./Carta";

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="usuarios">
        <Carta>
          <TarjetaUsuarios />
        </Carta>
      </div>
    );
  }
}

export default Usuarios;
