import React, { Component } from 'react';
import './App.css';
import RegistarConta from './components/form_register_conta'
import ListaDeTreino from './components/Lista';
import './components/learning.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <RegistarConta/>
      <ListaDeTreino/>
      </header>
    </div>
  );
}

export default App;