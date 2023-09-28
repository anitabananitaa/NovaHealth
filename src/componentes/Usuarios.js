import React, { Component } from "react";
class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    return <div className="App">{!logged && <Usuarios />}</div>;
  }
}

export default Usuarios;
