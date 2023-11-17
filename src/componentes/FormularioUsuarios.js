import React, { Component } from "react";
import Input from "./Input";
import axios from "axios";

const url = "https://72a.ctpoba.ar/api";

class FormularioUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_usuario:null,
      nombre: "",
      contraseña: "",
      tipo: "agente"
    };
  }

  salir = () => {
    this.setState({
      ID_usuario: null,
      nombre: "",
      contraseña: "",
      tipo: "agente"
    });
    this.props.salir();
  };


  componentDidMount(){
    if(this.props.datos !== null){
      this.setState({
        ID_usuario:this.props.datos.id,
        tipo:this.props.datos.tipo,
        nombre:this.props.datos.nombre
      })
    }
  }


  guardarPost(usuario){
    const config = {
      headers:{token:sessionStorage.getItem("token")}}
  axios.post(url + '/usuarios', usuario, config)
  .then((res) => {
    console.log(usuario);
  // Maneja la respuesta del servidor si es necesario
  console.log("Usuario registrado con éxito:", res.data);
  this.limpiarFormulario();
})
.catch((error) => {
  // Maneja errores si es necesario
  console.error("Error al registrar el usuario:", error);
  this.props.salir()
});
}

guardarPut(usuario){
  const config = {
    params: {ID_usuario: usuario.ID_usuario},
    headers:{token:sessionStorage.getItem("token")}
  }
  console.log(usuario);
  axios.put(url + '/usuarios', usuario, config)
  .then((res) => {
    console.log(usuario);
  // Maneja la respuesta del servidor si es necesario
  console.log("usuario registrada con éxito:", res.data);
  this.limpiarFormulario();
})
.catch((error) => {
  // Maneja errores si es necesario
  console.error("Error al registrar la usuario:", error);
  this.props.salir()
});
}

limpiarFormulario() {
  this.setState({
    ID_usuario: null,
    nombre: "",
    contraseña:"",    
    tipo: ""
  });
  this.props.salir();
}

  guardar(){

if (this.state.ID_usuario !== undefined && this.state.ID_usuario !==null)
{
  const usuario = {
    ID_usuario:this.state.ID_usuario,
    nombre_usuario: this.state.nombre,
    contraseña: this.state.contraseña,
    tipo: this.state.tipo
  }
  this.guardarPut(usuario)
}
    else
    {
    const usuario = {
      nombre_usuario: this.state.nombre,
      contraseña: this.state.contraseña,
      tipo: this.state.tipo
    }
    this.guardarPost(usuario)
  }
}

handleInputChange = (event) => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
};

  render() {
    return (
      <div className="modal">
      <div className="contenedorFormulario">
        <h1>Registro de Usuarios</h1>
        <div className="formulario">
          <span>
            Nombre
            <input type="text" name="nombre"
                value={this.state.nombre}
                onChange={this.handleInputChange}/>
          </span>
        </div>
        <div className="formulario">
          <span>
            Contraseña
            <input type="password" pattern="[0-9]{8}" name="contraseña"
                value={this.state.contraseña}
                onChange={this.handleInputChange}/>
          </span>
        </div>
        <div className="formulario">
          <span>
            Tipo
            <select className="miSelect" name="tipo"
                value={this.state.tipo}
                onChange={this.handleInputChange}>
              <option value="agente">Agente</option>
              <option value="admin">Administrador</option>
            </select>
          </span>
        </div>
        <button type="button" className="btn"  onClick={()=> this.guardar()}>
          Aceptar
        </button>
        <button 
            type="button" 
            className="btn" 
            onClick={() => this.salir()}  
          >
            Cancelar
          </button>
      </div>
      </div>
    );
  }
}
export default FormularioUsuarios;
