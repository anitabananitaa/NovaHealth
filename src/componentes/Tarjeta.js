import React, { Component } from "react";
class Tarjeta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    return <div className="App">{!logged && <Tarjeta />}</div>;
  }
}

export default Tarjeta;
