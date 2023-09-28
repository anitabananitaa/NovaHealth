import React, { Component } from "react";
class Boton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    return <div className="boton"></div>;
  }
}

export default Boton;
