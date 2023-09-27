import React, { Component } from "react";
import Boton from "./Boton";
import Input from "./Input";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { usuario, contraseña } = this.state;
    return (
      <div class="contenedor">
        <div className="logeo">
          <h1>Acceso</h1>
          <div class="formulario">
            Usuario:
            <Input titulo="Usuario" />
          </div>
          <div class="formulario">
            Contraseña:
            <Input titulo="Contraseña" />
          </div>
          <div className="botonera">
            <Boton
              titulo="Iniciar sesión"
              placeholder="Iniciar sesión"
              type="submit"
              class="btn"
              id="logear"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
