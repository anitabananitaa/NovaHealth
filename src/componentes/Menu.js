import React, { Component } from "react";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    return <div className="App">{!logged && <Menu />}</div>;
  }
}

export default Menu;
