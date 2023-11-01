import React, { Component } from "react";
import TarjetaPacientes from "./TarjetaPacientes";
import Carta from "./Carta";
import FormularioPacientes from "./FormularioPacientes";
import axios from 'axios';
const url = "http://10.0.3.91:3201/api";

class Pacientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  
  render() {
    const datosPacientes = this.state.datosPacientes; //llama a datosProfecionales del this.state
    return (
      <div className="pacientes"> 
      {this.state.showFormulario &&
        <FormularioPacientes
          salir={()=>this.showFormulario()}
        />
      }
      <Carta showFormulario={()=> this.showFormulario()}>

      {datosPacientes.map((paciente, index) => (//crea una carta por cada objeto en el arry datosPacientes
          <TarjetaPacientes
          key={index}
          nombre={paciente.nombre}
          apellido={paciente.apellido}
          fecNa={paciente.fecha_nac}
          dni={paciente.dni}
          telefono={paciente.telefono} />
      ))}
        </Carta>
      </div>
    );
  }
}

export default Pacientes;
