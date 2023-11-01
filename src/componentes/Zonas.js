import React, { Component } from "react";
import TarjetaZonas from "./TarjetaZonas";
import Carta from "./Carta";
import FormularioZonas from "./FormularioZonas";
import axios from 'axios';


const url = "http://192.168.0.189:3201/api";



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

  eliminarTarjeta = (id) => {
    const config = {
      params:{ID_zonas: id},
      headers:{token:sessionStorage.getItem("token")}
    }
    axios.delete(`${url}/zonas/`, config)//Usar funciones de flecha asegura que el contexto de this se mantenga y que this.props.onEliminarTarjeta y this.actualizarTarjetas funcionen correctamente
      .then((res) => {
        this.actualizarTarjetas(id);
      })
      .catch((error) => {
        console.error("Error al eliminar la tarjeta:", error);
      });
  }

  actualizarTarjetas = (id) => {
    // Filtra las tarjetas y excluye la que tiene el ID proporcionado
    const nuevasTarjetas = this.state.datosZonas.filter((zona) => zona.id !== id);

    // Actualiza el estado con las tarjetas actualizadas
    this.setState({ datosZonas: nuevasTarjetas });
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
  id={zona.id}
  tipo={zona.tipo}
  descripcion={zona.descripcion}
  disponibilidad={zona.disponibilidad}
  onEliminarTarjeta={this.eliminarTarjeta}
            />
          ))}
        </Carta>
      </div>
    );
  }
}

export default Zonas;
