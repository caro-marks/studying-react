import { Component } from "react";
import './estilo.css'
import {ReactComponent as DeleteSVG} from '../../assets/img/delete.svg'

class CardNota extends Component {

  deletarNota(){
    const index = this.props.indice
    this.props.apagarNota(index)
  }

  render(){
    return (
        <section className="card-nota" >
          <header className="card-nota_cabecalho">
            <h3 className="card-nota_titulo">
              {this.props.title}
            </h3>
            <DeleteSVG onClick={this.deletarNota.bind(this)}/>
          </header>
          <p className="card-nota_texto">
            {this.props.text}
          </p>
        </section>
    )
  }
};

export default CardNota