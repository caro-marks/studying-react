import { Component } from "react";
import './estilo.css'

class ListaDeCategorias extends Component{

  _handleEventoInput(evento){
    if(evento.key == "Enter"){
      const valorCategoria = evento.target.value
      this.props.adicionarCategoria(valorCategoria)    
    }
  }

  render(){
    return(
      <section className="listaCategorias">
        <ul className="listaCategorias-ul">
          {this.props.categorias.map((categoria,index)=>{
            return <li key={index} className="listaCategorias-li">{categoria}</li>
          })}
        </ul>
        <input className="listaCategorias-input" type="text" placeholder="Adicionar Categoria" onKeyUp={this._handleEventoInput.bind(this)}/>
      </section>
    )
  }
}

export default ListaDeCategorias