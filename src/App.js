import { Component } from 'react'
import FormCadastro from './components/FormCadastro'
import ListaDeNotas from './components/ListaDeNotas'

import './assets/App.css'
import './assets/index.css'

class App extends Component {
  _newNota(titulo, texto) {
    console.log(titulo + texto)
  }

  render() {
    return (
      <div className="conteudo">
        <FormCadastro createNota={this._newNota} />
        <ListaDeNotas />
      </div>
    )
  }
}

export default App
