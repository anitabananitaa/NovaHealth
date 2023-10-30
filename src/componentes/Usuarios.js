import React, { Component } from "react";
import TarjetaUsuarios from "./TarjetaUsuarios";
import Carta from "./Carta";
import FormularioUsuarios from "./FormularioUsuarios";
import axios from 'axios';

const url= "http://192.168.0.76:3201/api";


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
  }
  obtenerDatos(){
    axios.get(url + '/usuarios')
    .then((res) => {
      console.log(res.data);
      this.setState({datosUsuarios: res.data.result});
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
          tipo={usuarios.tipo}
          nombre_usuario={usuarios.nombre}
          contraceña={usuarios.contraceña}
          estado={usuarios.estado}
          />
          ))}
        </Carta>
      </div>
    );
  }
}

export default Usuarios;
