import React, { Component } from "react";
import Boton from "./Boton";
import Input from "./Input";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      password: "",
    };
  }

  verificarUsuarios() {
    {
      this.state.usuario == "admin" && this.state.password == "admin" //IF
        ? this.props.LoginOK() //VERDADERO
        : alert("error"); //FALSO
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
            <Input
              value={this.state.usuario} //ENVIO VARIABLE
              onChange={(e) => this.setState({ usuario: e.target.value })} //FUNCION QUE ACTUALIZA LA VARIABLE CADA VEZ QUE CAMBIA EL INPUT
            />
          </div>
          <div class="formulario">
            Contraseña:
            <Input
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
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
