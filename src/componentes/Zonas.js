import React, { Component } from "react";
import TarjetaZonas from "./TarjetaZonas";
import Carta from "./Carta";
import FormularioZonas from "./FormularioZonas";
import axios from 'axios';

const url = "http://192.168.0.76:3201/api";

// const url="http://192.168.1.16:3000/api"


class Zonas extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      showFormulario: false,
      datosZonas: [] // Inicializado como un array vacío
    };
  }

  componentDidMount() {
    this.obtenerDatos();
  }

  showFormulario() {
    this.setState({ showFormulario: !this.state.showFormulario });// llama a showFormulario del this.state
    this.obtenerDatos()
  }

  obtenerDatos() {
    axios.get(url + '/zonas')
      .then((res) => {
        console.log(res.data); //registra toda la informacion en la consola (status:"ok" con el arry aparte)
        this.setState({ datosZonas: res.data.result });// trae los resultados(arry) guardados en el state
        console.log(this.state.datosZonas);//verifica que datosZonas se guardo correctamente en la consola
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const datosZonas = this.state.datosZonas;// llama datosZonas del this.state
    return (
      <div className="zonas">
        {this.state.showFormulario &&
          <FormularioZonas
            salir={() => this.showFormulario()}
          />
        }
        <Carta showFormulario={() => this.showFormulario()}>
          {datosZonas.map((zona, index) => (//crea una carta por cada objeto en el array datosZonas
            <TarjetaZonas
              key={index}
              tipo={zona.tipo}
              descripcion={zona.descripcion}
              disponibilidad={zona.disponibilidad}
            />
          ))}
        </Carta>
      </div>
    );
  }
}

export default Zonas;
