import React, { Component } from "react";
import TarjetaUsuarios from "./TarjetaUsuarios";
import Carta from "./Carta";
import FormularioUsuarios from "./FormularioUsuarios";
import axios from 'axios';
const url = "http://10.0.3.91:3201/api";

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

  eliminarTarjeta = (id) => {
    const config = {
      params:{ID_usuario: id},
      headers:{token:sessionStorage.getItem("token")}
    }
    console.log(config)
    axios.delete(`${url}/usuarios/`, config)//Usar funciones de flecha asegura que el contexto de this se mantenga y que this.props.onEliminarTarjeta y this.actualizarTarjetas funcionen correctamente
      .then((res) => {
        this.obtenerDatos();
      })
      .catch((error) => {
        alert("error")
        console.error("Error al eliminar la tarjeta:", error);
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
            onEliminarTarjeta={this.eliminarTarjeta}
          />
          ))}
        </Carta>
      </div>
    );
  }
}

export default Usuarios;
