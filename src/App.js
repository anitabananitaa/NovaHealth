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
import FormularioBusqueda from "./componentes/FormularioBusqueda";
import FormularioProfesionales from "./componentes/FormularioProfesionales";
import SubFormularioLlamados from "./componentes/SubFormularioLlamados";
import FormularioUsuarios from "./componentes/FormularioUsuarios";
import FormularioZonas from "./componentes/FormularioZonas";
import FormularioLlamados from "./componentes/FormularioLlamados";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      pantalla: 1,
    };
  }

  LoginOK(token, tipo) {
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
    //return <div className="App">{!logged && <FormularioBusqueda />}</div>;
    //return <div className="App">{!logged && <Formulario />}</div>;
    //return <div className="App">{!logged && <FormularioProfesionales />}</div>;
    // return <div className="App">{!logged && <FormularioUsuarios />}</div>;
    //return <div className="App">{!logged && <FormularioZonas />}</div>;
    //return <div className="App">{!logged && <FormularioLlamados/>}</div>;
    //return <div className="App">{!logged && <SubFormularioLlamados />}</div>;
    );
  }
}
export default App;
