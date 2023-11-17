import React, { Component } from "react";
import axios from "axios";
import "./styles.css";
import Login from "./componentes/Login";
import Input from "./componentes/Input";
import Boton from "./componentes/Boton";
import FormularioPacientes from "./componentes/FormularioPacientes";
import Llamados from "./componentes/Llamados";
import Menu from "./componentes/Menu";
import Pacientes from "./componentes/Pacientes";
import Profesionales from "./componentes/Profesionales";
import Registro from "./componentes/Registro";
import Tarjetazonas from "./componentes/TarjetaZonas";
import Tarjepacientes from "./componentes/TarjetaPacientes";
import Tarjetaprofesionales from "./componentes/TarjetaProfesionales";
import Tarjetausuarios from "./componentes/TarjetaUsuarios";
import Tarjetallamados from "./componentes/TarjetaLlamados";
import Usuarios from "./componentes/Usuarios";
import Zonas from "./componentes/Zonas";
import FormularioProfesionales from "./componentes/FormularioProfesionales";
import FormularioFinalizar from "./componentes/FormularioFinalizar";
import FormularioUsuarios from "./componentes/FormularioUsuarios";
import FormularioZonas from "./componentes/FormularioZonas";
import FormularioLlamados from "./componentes/FormularioLlamados";
import FormularioAtender from  "./componentes/FormularioAtender";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      pantalla: 1,
    };
  }

  LoginOK(token, tipo) {
    console.log(token);
    sessionStorage.setItem("token", token)
    sessionStorage.setItem("tipo", tipo)
    this.setState({
      logged: true,
    });
  }
  ZonasOK(descripcion, tipo) {
    sessionStorage.setItem("descripcion", token)
    sessionStorage.setItem("tipo", tipo)
    this.setState({
      logged: true,
    });
  }
  cambiarPantalla(pant) {
    this.setState({
      pantalla: pant,
    });
  }

  render() {
    const { logged, pantalla } = this.state;
    return (
      <div className="App">
        {!logged ? (
          <div>
            <Login LoginOK={(token, tipo) => this.LoginOK(token, tipo)} />
          </div>
        ) : (
          <div className="Pantalla">
            <Menu cambiarPantalla={(pant) => this.cambiarPantalla(pant)} />
            {pantalla == 1 && <Llamados />}
            {pantalla == 2 && <Zonas />}
            {pantalla == 3 && <Pacientes />}
            {pantalla == 4 && <Profesionales />}
            {pantalla == 5 && <Usuarios />}
          </div>
        )}
      </div>

    );
  }
}
export default App;
