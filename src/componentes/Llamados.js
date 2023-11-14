import React, { Component } from "react";
import TarjetaLlamados from "./TarjetaLlamados";
import Carta from "./Carta";
import FormularioLamados from "./FormularioLlamados";
import axios from 'axios'; 

const url = "http://192.168.0.76:3201/api";


class Llamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosFormulario:null,
      showFormulario: false,
      datosLlamados: []
    };
  }

  componentDidMount(){
    this.obtenerDatos();
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



  render() {
    const datosLlamados = this.state.datosLlamados;
    return (
      <div className="llamados">
        {/* <h1>Llamados</h1> */}
      {this.state.showFormulario &&
        <FormularioLamados
          datos={this.state.datosFormulario}

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

        />
        ))}
      </Carta>
    </div>
    );
  }
}

export default Llamados;
