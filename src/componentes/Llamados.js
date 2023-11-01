import React, { Component } from "react";
import TarjetaLlamados from "./TarjetaLlamados";
import Carta from "./Carta";
import FormularioBusqueda from "./FormularioBusqueda";
import axios from 'axios'; 
const url = "http://10.0.14.190:3201/api";

class Llamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormulario: false,
      datosLlamados: []
    };
  }

  componentDidMount(){
    this.obtenerDatos();
  } 

  showFormulario(){
    this.setState({showFormulario: !this.state.showFormulario})
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
      {this.state.showFormulario &&
        <FormularioBusqueda
          salir={()=>this.showFormulario()}
        />
      }
      <Carta showFormulario={()=> this.showFormulario()}>
        {datosLlamados.map((llamados, index)=> (
        <TarjetaLlamados 
          key={index}
          estado={llamados.estado}
          tipo={llamados.tipo}
          fecha_hora_llamado={llamados.fecha_hora_llamado
          }
          fecha_hora_atencion={llamados.fecha_hora_atencion
          }
          origen={llamados.origen}
          profesional={llamados.ID_profesional}
        />
        ))}
      </Carta>
    </div>
    );
  }
}

export default Llamados;
