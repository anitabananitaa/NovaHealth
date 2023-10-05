import React, { Component } from "react";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { titulo, valor, onChange, password } = this.props;
    return (
      <div>
        <input 
          type={password ? "password" : "text"}
          value={valor}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
}

export default Input;
