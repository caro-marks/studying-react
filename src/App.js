import { Component } from 'react'
import FormCadastro from './components/FormCadastro'
import ListaDeNotas from './components/ListaDeNotas'

import './assets/App.css'
import './assets/index.css'

class App extends Component {
  render() {
    return (
      <div className="conteudo">
        <FormCadastro />
        <ListaDeNotas />
      </div>
    )
  }
}

export default App
