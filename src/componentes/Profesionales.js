import React, { Component } from "react";
import TarjetaProfesionales from "./TarjetaProfesionales";
import Carta from "./Carta";
import FormularioProfesionales from "./FormularioProfesionales";
import axios from 'axios';


const url = "https://72a.ctpoba.ar/api";

class Profesionales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosFormulario:null,
      showFormulario: false,
      datosProfesionales: []
    };
  }

  componentDidMount() {
    this.obtenerDatos();
  }
  
  showFormulario() {
    this.setState({ showFormulario: !this.state.showFormulario, datosFormulario: null });
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
  
  editarTarjeta=(datos) =>{
    this.setState({ showFormulario: !this.state.showFormulario, datosFormulario:datos});


  }

  eliminarTarjeta = (id) => {
    const config = {
      params:{ID_profesional: id},
      headers:{token:sessionStorage.getItem("token")}
    }
    console.log(config)
    axios.delete(`${url}/profesionales/`, config)//Usar funciones de flecha asegura que el contexto de this se mantenga y que this.props.onEliminarTarjeta y this.actualizarTarjetas funcionen correctamente
      .then((res) => {
        this.obtenerDatos();
      })
      .catch((error) => {
        alert("error")
        console.error("Error al eliminar la tarjeta:", error);
      });
  }


  render() {
    const datosProfesionales = this.state.datosProfesionales; //llama datosProfesionales del this.state
    return (
      <div className="profesionales">
        {this.state.showFormulario &&
          <FormularioProfesionales
            datos={this.state.datosFormulario}
            salir={()=>this.showFormulario()}
          />
        }
        <Carta showFormulario={()=> this.showFormulario()}>
          
        {datosProfesionales.map((profesional, index) => (//crea una carta por cada objeto en el arry datosProfesionales
          <TarjetaProfesionales
          key={index}
          id={profesional.ID_profesional}
          nombre={profesional.nombre}
          apellido={profesional.apellido}
          dni={profesional.dni}
          especialidad={profesional.especialidad}
          telefono={profesional.telefono}
          onEliminarTarjeta={this.eliminarTarjeta}
          onEditarDatos={this.editarTarjeta}
          />
        ))}
        </Carta>
      </div>
    );
  }
}

export default Profesionales;
