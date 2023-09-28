import React, { Component } from "react";
import Boton from "./Boton";
import Input from "./Input";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  verificarUsuarios() {
    const usuario = document.getElementById("Usuario").value;
    const password = document.getElementById("Contraseña").value;
    {
      (usuario == "admin" && password == "admin") ? this.props.LoginOK(): alert("error");
    }
  }

  render() {
    const { usuario, contraseña } = this.state;
    return (
      <div class="contenedor">
        <div className="logeo">
          <h1>Acceso</h1>
          <div class="formulario">
            Usuario:
            <Input id="Usuario" />
          </div>
          <div class="formulario">
            Contraseña:
            <Input id="Contraseña" />
          </div>
          <div className="botonera">
            <Boton
              titulo="Iniciar sesión"
              placeholder="Iniciar sesión"
              class="btn"
              onClick={() => this.verificarUsuarios()}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
