import React, { Component } from "react";
import "./styles.css";
import Login from "./componentes/Login";
import Input from "./componentes/Input";
import Boton from "./componentes/Boton";
import Formulario from "./componentes/Formulario";
import Llamados from "./componentes/Llamados";
import Menu from "./componentes/Menu";
import Pacientes from "./componentes/Pacientes";
import Profesionales from "./componentes/Profesionales";
import Registro from "./componentes/Registro";
import Tarjeta from "./componentes/Tarjeta";
import Usuarios from "./componentes/Usuarios";
import Zonas from "./componentes/Zonas";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}

//{!logged && <Login />}

export default App;
