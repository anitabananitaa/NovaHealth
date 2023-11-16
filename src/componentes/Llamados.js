import React, { Component } from "react";
import TarjetaLlamados from "./TarjetaLlamados";
import Carta from "./Carta";
import FormularioLamados from "./FormularioLlamados";
import axios from 'axios'; 
const url = "https://72a.ctpoba.ar/api";

class Llamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosFormulario:null,
      showFormulario: false,
      datosLlamados: [],
      datosZonas:[]
    };
  }

  componentDidMount(){
    this.obtenerDatos();
    this.obtenerZonas()
  } 

  showFormulario(){
    this.setState({showFormulario: !this.state.showFormulario});
    this.obtenerDatos()
  }
  obtenerDatos() {
    axios.get(url + '/llamados')
    .then((res) => {
      console.log(res.data); //registra toda la informacion en la consola (status:"ok" con el arry aparte)
      this.setState({ datosLlamados: res.data.result });// trae los resultados(arry) guardados en el state
      console.log(this.state.datosLlamados);//verifica que datosZonas se guardo correctamente en la consola
    })
    .catch((error) => {
      console.log(error);
    });
  }

  obtenerZonas(){
    axios.get(url + '/zonas')
    .then((res) => {
      console.log(res.data); //registra toda la informacion en la consola (status:"ok" con el array aparte)
      this.setState({ datosZonas: res.data.result });// trae los resultados(array) guardados en el state
      console.log(this.state.datosZonas);//verifica que datosZonas se guardo correctamente en la consola
    })
    .catch((error) => {
      console.log(error);
    });
  }

  editarTarjeta=(datos) =>{
    this.setState({ showFormulario: !this.state.showFormulario, datosFormulario:datos});


  }


  render() {
    const datosLlamados = this.state.datosLlamados;
    return (
      <div className="llamados">
        {/* <h1>Llamados</h1> */}
      {this.state.showFormulario &&
        <FormularioLamados
          datos={this.state.datosFormulario}
          zonas={this.state.datosZonas}
          salir={()=>this.showFormulario()}
        />
      }
      <Carta showFormulario={()=> this.showFormulario()}>
        {datosLlamados.map((llamados, index)=> (
        <TarjetaLlamados 
          key={index}
          estado={llamados.estado}
          tipo={llamados.zona.tipo}
          dni={llamados.paciente.dni}
          nombre={llamados.paciente.nombre}
          apellido={llamados.paciente.apellido}
          descripcion={llamados.zona.descripcion}
          fecha_hora_llamado={llamados.fecha_hora_llamado}
          fecha_hora_atencion={llamados.fecha_hora_atencion}
          origen={llamados.origen}
          profesional={llamados.nombre_profesional}
          onEditarDatos={this.editarTarjeta}
        />
        ))}
      </Carta>
    </div>
    );
  }
}

export default Llamados;
