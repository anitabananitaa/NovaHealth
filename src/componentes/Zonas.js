import React, { Component } from "react";
import TarjetaZonas from "./TarjetaZonas";
import Carta from "./Carta";
class Zonas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="zonas">
        <Carta>
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
