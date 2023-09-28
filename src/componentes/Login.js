import React, { Component } from "react";
import "../styles.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    return(<div className="App">{!logged && <Login />}</div>);
  }
}

export default Login;
