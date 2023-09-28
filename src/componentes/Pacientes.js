import React, { Component } from "react";
class Pacientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    return <div className="App">{!logged && <Pacientes />}</div>;
  }
}

export default Pacientes;
