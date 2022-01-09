import { Component } from 'react'
import FormCadastro from './components/FormCadastro'
import ListaDeNotas from './components/ListaDeNotas'

import './assets/App.css'
import './assets/index.css'
import ListaDeCategorias from './components/ListaDeCategorias'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notas: [],
      categorias: [],
    }
  }

  _newNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria }
    const novasNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      ...this.state,
      notas: novasNotas,
    }
    this.setState(novoEstado)
  }

  _destroyNota(indice) {
    let listaNotas = this.state.notas
    listaNotas.splice(indice, 1)
    const novoEstado = { ...this.state, notas: listaNotas }
    this.setState(novoEstado)
  }

  _adicionarCategoria(categoria) {
    const novasCategorias = [...this.state.categorias, categoria]
    const novoEstado = { ...this.state, categorias: novasCategorias }
    this.setState(novoEstado)
  }

  render() {
    return (
      <div className="conteudo">
        <FormCadastro
          categorias={this.state.categorias}
          createNota={this._newNota.bind(this)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this._adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            notas={this.state.notas}
            destroyNota={this._destroyNota.bind(this)}
          />
        </main>
      </div>
    )
  }
}

export default App
