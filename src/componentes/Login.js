import React, { Component } from "react";
import axios from "axios";
import Boton from "./Boton";
import Input from "./Input";
import ilustracion from "./assets/ilustracion.png";


const url = "http://10.0.3.91:3201/api";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass:""
    };
  }

  verificarUsuarios() {
    const datos={
      user: this.state.user,
      pass: this.state.pass
    }
    console.log(this.state.user)
    console.log(this.state.pass)
    axios.post(url+'/usuarios/login', datos)
    .then((res)=>{
      console.log(res.data)
      this.props.LoginOK(res.data.token,res.data.tipo)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  render() {
    const { user, pass } = this.state;
    return (
      <div className="contenedor">
        <div className="logeo">
          <h1>Acceso</h1>
          <div className="formulario">
            Usuario:
            <Input value={user} onChange={(valor)=> this.setState({user: valor})}/>
          </div>
          <div className="formulario">
            Contraseña:
            <Input password value={pass} onChange={(valor)=> this.setState({pass: valor})}/>
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
