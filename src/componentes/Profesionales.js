import React, { Component } from "react";
import TarjetaProfesionales from "./TarjetaProfesionales";
import Carta from "./Carta";
import FormularioProfesionales from "./FormularioProfesionales";
import axios from 'axios';
const url = "http://10.0.14.190:3201/api";

class Profesionales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormulario: false,
      datosProfesionales: []
    };
  }

  componentDidMount() {
    this.obtenerDatos();
  }
  
  showFormulario(){
    this.setState({showFormulario: !this.state.showFormulario});
    this.obtenerDatos();
  }

  obtenerDatos() {
    axios.get(url + '/profesionales')
      .then((res) => {
        console.log(res.data); //registra toda la informacion en la consola (status:"ok" con el arry aparte)
        this.setState({ datosProfesionales: res.data.result });// trae los resultados(arry) guardados en el state
        console.log(this.state.datosProfesionales);//verifica que datosProfesionales se guardo correctamente en la consola
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const datosProfesionales = this.state.datosProfesionales; //llama datosProfesionales del this.state
    return (
      <div className="profesionales">
        {this.state.showFormulario &&
          <FormularioProfesionales
            salir={()=>this.showFormulario()}
          />
        }
        <Carta showFormulario={()=> this.showFormulario()}>
          
        {datosProfesionales.map((profesional, index) => (//crea una carta por cada objeto en el arry datosProfesionales
          <TarjetaProfesionales
          key={index}
          nombre={profesional.nombre}
          apellido={profesional.apellido}
          dni={profesional.dni}
          especialidad={profesional.especialidad}
          telefono={profesional.telefono}
          />
        ))}
        </Carta>
      </div>
    );
  }
}

export default Profesionales;
