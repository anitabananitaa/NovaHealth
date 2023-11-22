import React, { Component } from "react";
import axios from "axios";

const url = "https://72a.ctpoba.ar/api";

class FormularioLlamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_zonas: "",
      ID_paciente: "",
      tipo: ""
    };
  }

  componentDidMount() {
    if (this.props.datos !== null) {
      this.setState({
        estado: this.props.datos.estado,
        tipo: this.props.datos.tipo,
        dni: this.props.datos.dni
      });
    }
  }

  guardar() {
    const llamado = {
      tipo_de_llamado: this.state.tipo,
      ID_paciente: this.state.ID_paciente,
      ID_zona: this.state.ID_zonas
    }
    this.guardarPost(llamado);
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

  limpiarFormulario() {
    this.setState({
      ID_llamado: null,
      ID_zonas: "",
      ID_paciente: "",
      tipo: ""
    });
    this.props.salir();
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
              <select
              className="miSelect"
              value={this.state.ID_paciente}
              onChange={(e) => this.handleInputChange(e)}
              name="ID_paciente"
            >
              {this.props.pacientes.map((paciente) => (
                <option key={paciente.ID_paciente} value={paciente.ID_paciente}>
                  {paciente.dni}
                </option>
              ))}
            </select>
            </span>
          </div>

          <div className="formulario">
            <span>
              Zona:
              <select
              className="miSelect"
              value={this.state.ID_zonas}
              onChange={(e) => this.handleInputChange(e)}
              name="ID_zonas" >
              {this.props.zonas.map((zona) => (
                <option key={zona.ID_zonas} value={zona.ID_zonas}>
                  {zona.tipo}
                </option>
              ))}
            </select>
            </span>
          </div>

          <button type="button" className="btn" onClick={()=> this.guardar()}>
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

