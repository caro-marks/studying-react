import { Component } from "react";
import './estilo.css'

class FormCadastro extends Component{

  constructor(props){
    super(props)
    this.titulo = "";
    this.nota = "";
  }
  _handleChangeTitulo(evento){
    evento.stopPropagation()
    this.titulo = evento.target.value;
  }
  _handleChangeNota(evento){
    evento.stopPropagation()
    this.nota = evento.target.value;
  }
  _handleCreateNota(evento){
    evento.preventDefault()
    evento.stopPropagation()
    this.props.createNota(this.titulo, this.nota)
  }


  render() {
    return (
      <form
       className="form-cadastro"
       onSubmit={this._handleCreateNota.bind(this)}
      >
        <input
         className="form-cadastro_input" 
         type="text" 
         placeholder="Titulo" 
         onChange={this._handleChangeTitulo.bind(this)}
        />
        <textarea 
          rows={15}
          className="form-cadastro_input" placeholder="Escreva sua nota..."
          onChange={this._handleChangeNota.bind(this)}
        />
        <button
         className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    )
  }
}

export default FormCadastro