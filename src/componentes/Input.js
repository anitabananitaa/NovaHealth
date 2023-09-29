import React, { Component } from "react";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { value, onChange } = this.props; //variables heredadas del padre.
    return (
      <div>
        <input value={value} onChange={onChange} />
      </div>
    );
  }
}

export default Input;
