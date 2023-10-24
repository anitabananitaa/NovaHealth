import React, { Component } from "react";
import TarjetaZonas from "./TarjetaZonas";
import Carta from "./Carta";
import FormularioZonas from "./FormularioZonas";
import axios from 'axios';

const url="http://192.168.0.129:3000/api"

class Zonas extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      showFormulario: false,
    };

  }

  componentDidMount(){
    this.obtenerDatos();
  }
  
  showFormulario(){
    this.setState({showFormulario: !this.state.showFormulario})
  }

  obtenerDatos(){
      const datos={
        descripcion: this.state.descripcion,
        tipo: this.state.tipo
      }
      console.log(this.state.descripcion)
      console.log(this.state.tipo)
      axios.get(url+'/zonas')
      .then((res)=>{
        console.log(res.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  render() {
    return (
      <div className="zonas">
        {this.state.showFormulario &&
          <FormularioZonas
            salir={()=>this.showFormulario()}
          />
        }
        <Carta showFormulario={()=> this.showFormulario()}>
          <TarjetaZonas />

        </Carta>
      </div>
    );
  }
  
}


export default Zonas;
