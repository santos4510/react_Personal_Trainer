import React, { Component } from 'react';

class RegistarConta extends Component {
  state = {
    name: '',
    email: '',
    phonenumber: ''
  };


  changeData = (e) => {
    const { name, value } = e.target; // Pega "name" e "value" do input
    this.setState({ [name]: value }); // Atualiza o campo certo no state
  };

  // Lida com o envio do formulário
  formSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name } = this.state; // Pega o nome do state pra usar no título
    return (
        
        <div className='mb-3'>
          <h1>Bem-vindo {name ? name : 'user'} </h1>
          <form onSubmit={this.formSubmit}>
            <div className="form-group">
              <h2>Sou o teu Personal Trainer online.</h2>
              <label>Insere o seu nome, número de telemóvel e email aqui em baixo:</label><br/>
              <input class="form-control" type="text" name="name" placeholder="Nome" onChange={this.changeData} /><br/>
              <input class="form-control" type="text" name="email" placeholder="Email" onChange={this.changeData} /><br/>
              <input class="form-control" type="text" name="phonenumber" placeholder="Número de telemóvel" onChange={this.changeData} /><br/>
              <select class="form-control">
                <option value="" selected disabled>Select your age</option>
                <option value="7 - 14"> 7 - 14 </option>
                <option value="15 - 20"> 15 - 20 </option>
                <option value="20+"> 20+ </option>
              </select><br/>
              <button class="btn btn-danger" type='submit'>Submeter</button>
            </div>
          </form>    
        </div>
    );
  }
}

export default RegistarConta;