import React, { Component } from 'react';


class ListaDeTreino extends Component {
  state = {
    treino: [], // Lista de treino já preenchida
    novoTreino: '' // Para armazenar o valor do input
  };

  // Atualiza o valor do input no state
  handleChange = (e) => {
    this.setState({ novoTreino: e.target.value });
  };

  // Adiciona um novo treino à lista
  adicionarTreino = () => {
    const { novoTreino, treino } = this.state;
    if (novoTreino.trim()) {
      this.setState({
        treino: [...treino, novoTreino], // Mantém os treinos existentes e adiciona o novo
        novoTreino: ''
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Diz nos quais seriam os teus objetivos conosco?</h1>
        <ul>
          {this.state.treino.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Digita os teus objetivos"
          value={this.state.novoTreino}
          onChange={this.handleChange}
        />
        <button class="btn btn-success" onClick={this.adicionarTreino}>Adicionar objetivo</button>
      </div>
    );
  }
}

export default ListaDeTreino;