import React, { Component } from "react";
import TarjetaPacientes from "./TarjetaPacientes";
import Carta from "./Carta";
import FormularioPacientes from "./FormularioPacientes";
import axios from 'axios';
// const url = "http://192.168.1.16:3201/api";

const url = "http://192.168.0.76:3201/api";

class Pacientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosFormulario:null,
      showFormulario: false,
      datosPacientes: []
    };
  }

  componentDidMount() {
    this.obtenerDatos();
  }
  
  showFormulario(){
    this.setState({showFormulario: !this.state.showFormulario})
    this.obtenerDatos();
  }

  obtenerDatos() {
    axios.get(url + '/pacientes')
      .then((res) => {
        console.log(res.data); //registra toda la informacion en la consola (status:"ok" con el arry aparte)
        this.setState({ datosPacientes: res.data.result });// trae los resultados(arry) guardados en el state
        console.log(this.state.datosPacientes);//verifica que datosProfesionales se guardo correctamente en la consola
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
      params:{ID_paciente: id},
      headers:{token:sessionStorage.getItem("token")}
    }
    console.log(config)
    axios.delete(`${url}/pacientes/`, config)//Usar funciones de flecha asegura que el contexto de this se mantenga y que this.props.onEliminarTarjeta y this.actualizarTarjetas funcionen correctamente
      .then((res) => {
        this.obtenerDatos();
      })
      .catch((error) => {
        alert("error")
        console.error("Error al eliminar la tarjeta:", error);
      });
  }

  
  render() {
    const datosPacientes = this.state.datosPacientes; //llama a datosProfecionales del this.state
    return (
      <div className="pacientes"> 
      {this.state.showFormulario &&
        <FormularioPacientes
        datos={this.state.datosFormulario}
        salir={()=>this.showFormulario()}
        />
      }
      <Carta showFormulario={()=> this.showFormulario()}>

      {datosPacientes.map((paciente, index) => (//crea una carta por cada objeto en el arry datosPacientes
          <TarjetaPacientes
          key={index}
          id={paciente.ID_paciente}
          nombre={paciente.nombre}
          apellido={paciente.apellido}
          fecNa={paciente.fecha_nac}
          dni={paciente.dni}
          telefono={paciente.telefono}
          onEliminarTarjeta={this.eliminarTarjeta}
          onEditarDatos={this.editarTarjeta}
          />
          
      ))}
        </Carta>
      </div>
    );
  }
}

export default Pacientes;
