import React, { Component } from "react";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { titulo, valor } = this.props;
    return (
      <div>
        <input />
      </div>
    );
  }
}

export default Input;
