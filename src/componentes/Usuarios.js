import React, { Component } from "react";
import TarjetaUsuarios from "./TarjetaUsuarios";
import Carta from "./Carta";
import FormularioUsuarios from "./FormularioUsuarios";
import axios from 'axios';

const url = "http://192.168.0.76:3201/api";

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormulario: false,
      datosUsuarios: []
    };
  }

  componentDidMount(){
    this.obtenerDatos();
  }
  showFormulario(){
    this.setState({showFormulario: !this.state.showFormulario})
    this.obtenerDatos();
  }
  obtenerDatos(){

    const config = {
      headers: {
        token: sessionStorage.getItem("token")
      }
    }
    axios.get(url + '/usuarios', config)
    .then((res) => {
      console.log(res.data);
      this.setState({ datosUsuarios: res.data.result });
      console.log(this.state.datosUsuarios)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const datosUsuarios= this.state.datosUsuarios;
    return (
      <div className="usuarios">
        {this.state.showFormulario &&
          <FormularioUsuarios
            salir={()=>this.showFormulario()}
          />
        }
        <Carta showFormulario={()=> this.showFormulario()}>
          {datosUsuarios.map((usuario, index)=> ( 
          <TarjetaUsuarios 
            key={index}
            tipo={usuario.tipo}
            nombre={usuario.nombre_usuario}
            estado={usuario.estado}
          />
          ))}
        </Carta>
      </div>
    );
  }
}

export default Usuarios;
