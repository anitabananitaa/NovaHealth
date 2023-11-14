import React, { Component } from "react";
import Input from "./Input";
import axios from "axios";
const url = "https://72a.ctpoba.ar/api";

class FormularioLlamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_llamado:null,
      estado: "",
      tipo:"",
      dni: "",
      nombre: "",
      apellido:"",
      descripcion:"",
      fecha_hora_llamado: "",
      fecha_hora_atencion:"",
      profesional: "",
      origen: ""
    };
  }
  guardar(){
    //
    this.props.salir()
  }
  componentDidMount(){
    if(this.props.datos !== null){
      this.setState({
        ID_llamado:this.props.datos.id,
        estado: this.props.datos.estado,
        tipo: this.props.datos.tipo,
        dni: this.props.datos.dni,
        nombre: this.props.datos.nombre,
        apellido: this.props.datos.apellido,
        descripcion: this.props.datos.descripcion,
        fecha_hora_llamado: this.props.datos.fecha_hora_llamado,
        fecha_hora_atencion: this.props.datos.fecha_hora_atencion,
        profesional: this.props.datos.profesional,
        origen: this.props.datos.origen
      })
    }
  }
  guardarPost(llamado){
    axios.post(url + '/llamados', llamado)
    .then((res) => {
      console.log(llamado);
    // Maneja la respuesta del servidor si es necesario
    console.log("llamado registrado con éxito:", res.data);
    this.props.salir();
  })
  .catch((error) => {
    // Maneja errores si es necesario
    console.error("Error al registrar el llamado:", error);
    this.props.salir()
  });
  }

  guardarPut(llamado){
    const config = {
      params: {ID_llamado: llamado.ID_llamado}
    }
    console.log(llamado);
    axios.put(url + '/llamados', llamado, config)
    .then((res) => {
      console.log(llamado);
    // Maneja la respuesta del servidor si es necesario
    console.log("llamado registrado con éxito:", res.data);
    this.props.salir();
  })
  .catch((error) => {
    // Maneja errores si es necesario
    console.error("Error al registrar el llamado:", error);
    this.props.salir()
  });
  }

  guardar(){
  if (this.state.ID_llamado !== undefined && this.state.ID_llamado !==null)
{
  const llamado = {
    ID_llamado:this.state.ID_llamado,
    estado: this.state.estado,
    tipo: this.state.tipo,
    dni: this.state.dni,
    nombre: this.state.nombre,
    apellido: this.state.apellido,
    descripcion: this.state.descripcion,
    fecha_hora_llamado: this.state.fecha_hora_llamado,
    fecha_hora_atencion: this.state.fecha_hora_atencion,
    profesional: this.state.profesional,
    origen: this.state.origen
  }
  this.guardarPut(llamado)
}    
    else
    {
      const llamado = {
        estado: this.state.estado,
        tipo: this.state.tipo,
        dni: this.state.dni,
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        descripcion: this.state.descripcion,
        fecha_hora_llamado: this.state.fecha_hora_llamado,
        fecha_hora_atencion: this.state.fecha_hora_atencion,
        profesional: this.state.profesional,
        origen: this.state.origen
      }
      this.guardarPost(llamado)
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
          <h1>Registro de Llamados</h1>
          <div className="formulario">
            <span>
              Estado:
              <select className="miSelect">
                <option className="edit" value="opcion1">
                  Pendiente
                </option>
                <option className="edit" value="opcion2">
                  Atendido
                </option>
                <option className="edit" value="opcion2">
                  Finalizado
                </option>
              </select>
            </span>
          </div>
          <div className="formulario">
            <span>
              Tipo:
              <select className="miSelect">
                <option value="opcion1">Urgente</option>
                <option value="opcion2">No Urgente</option>
              </select>
            </span>
          </div>

          <div className="formulario">
          <span>
              Nombre:
              <select className="miSelect">
                <option className="edit" value="opcion1">
                pruebaPaciente1
                </option>
                <option className="edit" value="opcion2">
                pruebaPaciente2
                </option>
              </select>
            </span>
          </div>

          <div className="formulario">
          <span>
              Apellido:
              <select className="miSelect">
                <option className="edit" value="opcion1">
                pruebaPaciente1
                </option>
                <option className="edit" value="opcion2">
                pruebaPaciente2
                </option>
              </select>
            </span>
          </div>

          <div className="formulario">
          <span>
              DNI:
              <select className="miSelect">
                <option className="edit" value="opcion1">
                  pruebaPaciente1
                </option>
                <option className="edit" value="opcion2">
                pruebaPaciente2
                </option>
              </select>
            </span>
          </div>

          <div className="formulario">
          <span>
              Zona:
              <select className="miSelect">
                <option className="edit" value="opcion1">
                  pruebaZona1
                </option>
                <option className="edit" value="opcion2">
                  pruebaZona2
                </option>
              </select>
            </span>
          </div>

          <div className="formulario">
            <span>
              Fecha-Hora del Llamado:
              <input type="text"  />
            </span>
          </div>

          <div className="formulario">
            <span>
              Fecha-Hora de Atencion:
              <input type="text" />
            </span>
          </div>

          <div className="formulario">
          <span>
              Profesional:
              <select className="miSelect">

                <option className="edit" value="opcion1">
                  pruebaProfesional1
                </option>
                <option className="edit" value="opcion2">
                  pruebaProfesional2
                </option>
              </select>
            </span>
          </div>

          <button type="button" 
          className="btn" 
          onClick={()=> this.guardar()}>
            Aceptar
          </button>
          <button type="button" 
          className="btn" 
          onClick={()=> this.props.salir()}>
            Cancelar
          </button>
        </div> 
      </div>
    );
  }
}
export default FormularioLlamados;
