import React, { Component } from "react";
class Profesionales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    return <div className="App">{!logged && <Profesionales />}</div>;
  }
}

export default Profesionales;
