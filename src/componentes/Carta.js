import React, { Component } from "react";
class Carta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    return <div className="App"></div>;
  }
}

export default Carta;
