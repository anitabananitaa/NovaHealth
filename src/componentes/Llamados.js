import React, { Component } from "react";
class Llamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    return <div className="App">{!logged && <Formulario />}</div>;
  }
}

export default Llamados;
