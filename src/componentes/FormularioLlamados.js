import React, { Component } from "react";
import axios from "axios";
import Llamados from "./Llamados";

const url = "https://72a.ctpoba.ar/api";

class FormularioLlamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_llamado: null,
      estado: "Pendiente",
      tipo: "",  // Asegúrate de inicializar tipo
      dni: "",
      nombre: "",
      apellido: "",
      descripcion: "",
      fecha_hora_llamado: "",
      fecha_hora_atencion: "",
      profesional: "",
      ID_zonas: null,
    };
  }

  componentDidMount() {
    if (this.props.datos !== null) {
      this.setState({
        ID_llamado: this.props.datos.id,
        estado: this.props.datos.estado,
        tipo: this.props.datos.tipo,
        dni: this.props.datos.dni,
        nombre: this.props.datos.nombre,
        apellido: this.props.datos.apellido,
        descripcion: this.props.datos.descripcion,
        fecha_hora_llamado: this.props.datos.fecha_hora_llamado,
        fecha_hora_atencion: this.props.datos.fecha_hora_atencion,
        profesional: this.props.datos.profesional,
      });
    }
  }

  guardarPost(llamado) {
    axios
      .post(url + "/llamados", llamado)
      .then((res) => {
        console.log(llamado);
        console.log("llamado registrado con éxito:", res.data);
        this.limpiarFormulario();
      })
      .catch((error) => {
        console.error("Error al registrar el llamado:", error);
        this.props.salir();
      });
  }

  guardarPut(llamado) {
    const config = {
      params: { ID_llamado: llamado.ID_llamado },
    };
    axios
      .put(url + "/llamados", llamado, config)
      .then((res) => {
        console.log(llamado);
        console.log("Llamado actualizado con éxito:", res.data);
        this.limpiarFormulario();
      })
      .catch((error) => {
        console.error("Error al actualizar el llamado:", error);
        this.props.salir();
      });
  }

  limpiarFormulario() {
    this.setState({
      ID_llamado: null,
      estado: "Pendiente",
      tipo: "",
      dni: "",
      nombre: "",
      apellido: "",
      descripcion: "",
      fecha_hora_llamado: "",
      fecha_hora_atencion: "",
      profesional: "",
      origen: "",
      ID_zonas: null,
    });
    this.props.salir();
  }

  guardar() {
    if (this.state.ID_llamado !== undefined && this.state.ID_llamado !== null) {
      const llamado = {
        ID_llamado: this.state.ID_llamado,
        estado: this.state.estado,
        tipo: this.state.tipo,
        dni: this.state.dni,
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        fecha_hora_llamado: this.state.fecha_hora_llamado,
        fecha_hora_atencion: this.state.fecha_hora_atencion,
        profesional: this.state.profesional,
        ID_zonas: this.state.ID_zonas,
      };
      console.log(llamado);
      this.guardarPut(llamado);
    } else {
      const llamado = {
        ID_llamado: this.state.ID_llamado,
        estado: this.state.estado,
        tipo: this.state.tipo,
        dni: this.state.dni,
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        fecha_hora_llamado: this.state.fecha_hora_llamado,
        fecha_hora_atencion: this.state.fecha_hora_atencion,
        profesional: this.state.profesional,
        ID_zonas: this.state.ID_zonas,
        
      };
      console.log(llamado);
      this.guardarPost(llamado);
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  

  render() {
    const colores = {
      verde: "#008000",
      amarillo: "#FFFF00",
      rojo: "#FF0000",
    };
    return (
      <div className="modal">
        <div className="contenedorFormulario">
          <h1>Registro de Llamados</h1>

          <div className="formulario">
            <span>
              Tipo:
              <select
                className="miSelect"
                value={this.state.tipo}
                onChange={(e) => this.setState({ tipo: e.target.value })}
              >
                <option value="verde">Código Verde</option>
                <option value="amarillo">Código Amarillo</option>
                <option value="rojo">Código Rojo</option>
              </select>
              <span
                className="color-box"
                style={{ backgroundColor: colores[this.state.tipo] }}
              ></span>
            </span>
          </div>

          <div className="formulario">
            <span>
              DNI:
              <input
                type="text"
                pattern="[0-9]"
                name="dni"
                value={this.state.dni}
                onChange={this.handleInputChange}
              />
            </span>
          </div>

          <div className="formulario">
            <span>
              Nombre:
              <input
                type="text"
                name="nombre"
                value={this.state.nombre}
                onChange={this.handleInputChange}
              />
            </span>
          </div>

          <div className="formulario">
            <span>
              Apellido:
              <input
                type="text"
                name="apellido"
                value={this.state.apellido}
                onChange={this.handleInputChange}
              />
            </span>
          </div>

          <div className="formulario">
            <span>
              Zona:
              <select
              className="miSelect"
              value={this.state.ID_zonas}
              onChange={(e) => this.handleInputChange(e)}
              name="ID_zonas"
            >
              {this.props.zonas.map((zona) => (
                <option key={zona.ID_zonas} value={zona.ID_zonas}>
                  {zona.tipo}
                </option>
              ))}
            </select>
            </span>
          </div>
          <button type="button" className="btn" onClick={() => this.guardar()}>
            Aceptar
          </button>
          <button type="button" className="btn" onClick={() => this.props.salir()}>
            Cancelar
          </button>
        </div>
      </div>
    );
  }
}

export default FormularioLlamados;

