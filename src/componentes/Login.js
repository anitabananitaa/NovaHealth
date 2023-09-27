import React, { Component } from "react";
import Boton from "./Boton";
import Input from "./Input";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="contenedor">
        <h1>Login</h1>
        <div class="formulario">
          <Input titulo="Usuario" />
          <i class="bx bxs-user"></i>
        </div>
        <div class="formulario">
          <Input titulo="Materia" />
          <i class="bx bxs-lock-alt"></i>
        </div>
        <Boton type="submit" class="btn" id="logear" />
        Log in
        <Boton type="submit" class="btn" onclick="redireccionar()" id="crear" />
        Create
      </div>
    );
  }
}
export default Login;
