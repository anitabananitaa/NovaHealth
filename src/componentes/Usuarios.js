import React, { Component } from "react";
import TarjetaUsuarios from "./TarjetaUsuarios";
import Carta from "./Carta";
import FormularioUsuarios from "./FormularioUsuarios";
import axios from 'axios';
const url = "https://72a.ctpoba.ar/api";

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosFormulario:null,
      showFormulario: false,
      datosUsuarios: []
    };
  }

  componentDidMount(){
    this.obtenerDatos();
  }

  showFormulario() {
    this.setState({ showFormulario: !this.state.showFormulario, datosFormulario: null });
    this.obtenerDatos();
  }


  obtenerDatos(){
    const config = {
      headers:{token:sessionStorage.getItem("token")}
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

  editarTarjeta=(datos) =>{
    this.setState({ showFormulario: !this.state.showFormulario, datosFormulario:datos});
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
          datos={this.state.datosFormulario}

          salir={()=>this.showFormulario()}
          />
        }
        <Carta showFormulario={()=> this.showFormulario()}>
          {datosUsuarios.map((usuario, index)=> ( 
          <TarjetaUsuarios 
            key={index}
            id={usuario.ID_usuario}
            tipo={usuario.tipo}
            nombre={usuario.nombre_usuario}
            onEliminarTarjeta={this.eliminarTarjeta}
            onEditarDatos={this.editarTarjeta}
          />
          ))}
        </Carta>
      </div>
    );
  }
}

export default Usuarios;
