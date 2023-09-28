import React, { Component } from "react";
class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    return <div className="App">{!logged && <Registro />}</div>;
  }
}

export default Registro;
