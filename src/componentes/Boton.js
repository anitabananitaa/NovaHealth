import React, { Component } from "react";

class Boton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <span className="btn">{this.props.titulo}</span>
      </div>
    );
  }
}

export default Boton;
