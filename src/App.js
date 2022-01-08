import { Component } from 'react'
import FormCadastro from './components/FormCadastro'
import ListaDeNotas from './components/ListaDeNotas'

import './assets/App.css'
import './assets/index.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notas: [],
    }
  }

  _newNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novasNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novasNotas,
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <div className="conteudo">
        <FormCadastro createNota={this._newNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </div>
    )
  }
}

export default App
