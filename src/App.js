import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from 'dir1/ComponentA';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ComponentA />
        </header>
      </div>
    );
  }
}

export default App;