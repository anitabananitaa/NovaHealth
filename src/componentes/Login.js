import React, { Component } from "react";
import Boton from "./Boton";
import Input from "./Input";
import ilustracion from "./assets/ilustracion.png";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  verificarUsuarios() {
    const usuario = document.getElementById("Usuario").value;
    const password = document.getElementById("Contraseña").value;
    {
      usuario == "admin" && password == "admin"
        ? this.props.LoginOK()
        : alert("error");
    }
  }

  render() {
    const { usuario, contraseña } = this.state;
    return (
      <div className="contenedor">
        <div className="logeo">
          <h1>Acceso</h1>
          <div className="formulario">
            Usuario:
            <Input id="Usuario" />
          </div>
          <div className="formulario">
            Contraseña:
            <Input id="Contraseña" />
          </div>
          <div className="botonera">
            <Boton
              titulo="Iniciar sesión"
              placeholder="Iniciar sesión"
              className="btn"
              onClick={() => this.verificarUsuarios()}
            />
          </div>
        </div>
        <div className="imagen1">
          <img src={ilustracion} />
        </div>
      </div>
    );
  }
}
export default Login;
