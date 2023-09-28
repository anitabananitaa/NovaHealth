import React, { Component } from "react";
import "./styles.css";
import Formulario from "./componentes/Formulario";
import Input from "./componentes/Input";
import Boton from "./componentes/Boton";
import Login from "./componentes/Login";
import Llamados from "./componentes/Llamados";
import Menu from "./componentes/Menu";
import Registro from "./componentes/Registro";
import Usuarios from "./componentes/Usuarios";
import Tarjeta from "./componentes/Tarjeta";
import Zonas from "./componentes/Zonas";
import Pacientes from "./componentes/Pacientes";
import Profesionales from "./componentes/Profesionales";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }
  render() {
    const { logged } = this.state;
    return <div className="App">{!logged && <Formulario />}</div>;
  }
}

export default App;
