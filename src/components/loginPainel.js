import React, { Component } from 'react';
import './login.css'; // Arquivo CSS opcional pra estilizar

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  // Atualiza o state dinamicamente
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Lida com o envio do formulário
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log('Email:', email);
    console.log('Password:', password);
    alert(`Bem-vindo, ${email}!`);
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;