import React, { Component } from "react";
import axios from "axios";
import Boton from "./Boton";
import Input from "./Input";
import ilustracion from "./assets/ilustracion.png";

const url = "http://192.168.0.76:3201/api";


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
      this.props.LoginOK(res.data.user.newToken,res.data.user.tipo)
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
          <h1>Bienvenido a Nova Health</h1>
          <div className="formulario">
            <Input 
         
            value={user} 
            onChange={(valor)=> this.setState({user: valor})}/>
            <label className="OrdenarLabelEnInput">
              <h1> Usuario</h1>
            </label>
          </div>
          <div className="formulario">
            
            <Input password value={pass} onChange={(valor)=> this.setState({pass: valor})}/>
            <label className="OrdenarLabelEnInput"> 
              <h1> Contraseña</h1>
            </label>
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
