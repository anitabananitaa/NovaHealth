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
      estado: "",
      tipo: ""

    };
  }

  componentDidMount(){
    if(this.props.datos !== null){
      this.setState({
        ID_usuario:this.props.datos.id,
        tipo:this.props.datos.tipo,
        nombre:this.props.datos.nombre,
        estado:this.props.datos.estado
      })
    }
  }



  guardar(){
    const usuario = {
    nombre: this.state.nombre,
    contraseña: this.state.contraseña,
    tipo: this.state.tipo,
    estado: this.state.estado
  }
  axios.post(url + '/usuarios', usuario)
  .then((res) => {
    console.log(usuario);
  // Maneja la respuesta del servidor si es necesario
  console.log("Usuario registrado con éxito:", res.data);
  this.props.salir();
})
.catch((error) => {
  // Maneja errores si es necesario
  console.error("Error al registrar el usuario:", error);
  this.props.salir()
});
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
            Estado
            <select className="miSelect" name="estado"
                value={this.state.estado}
                onChange={this.handleInputChange}>
              <option className="edit" value="opcion1">
                Activo
              </option>
              <option className="edit" value="opcion2">
                Inactivo
              </option>
            </select>
          </span>
        </div>
        <div className="formulario">
          <span>
            Tipo
            <select className="miSelect" name="tipo"
                value={this.state.tipo}
                onChange={this.handleInputChange}>
              <option value="opcion1">Administrador</option>
              <option value="opcion2">Agente</option>
            </select>
          </span>
        </div>
        <button type="button" className="btn"  onClick={()=> this.guardar()}>
          Aceptar
        </button>
        <button 
            type="button" 
            className="btn" 
            onClick={()=> this.props.salir()}  
          >
            Cancelar
          </button>
      </div>
      </div>
    );
  }
}
export default FormularioUsuarios;
