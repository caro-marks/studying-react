import { Component } from "react";
import CardNota from "../CardNota";
import './estilo.css'

class ListaDeNotas extends Component{
  render(){
    return (
      <ul className="lista-notas">
        {
          this.props.notas.map(
            ({titulo, texto},index) => {
              return (
                <li className="lista-notas_item" key={index}>
                  <CardNota indice={index} title={titulo} text={texto}
                    apagarNota={this.props.destroyNota}
                  />
                </li>
              )
            }
          )
        }
      </ul>
    )
  }
}

export default ListaDeNotas