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

const apiUrl = 'https://hd6v8q-3000.csb.app/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      pantalla: 1,
    };
  }


  LoginOK() {
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
            <Login LoginOK={() => this.LoginOK()} />
          </div>
        ) : (
          <div class="Pantalla">
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
