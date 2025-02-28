import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Learning from './components/learning';
import './components/learning.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <header className="App-header">
        
      <Hello>  </Hello>
      <Learning></Learning>

      </header>
    </div>
  );
}

export default App;