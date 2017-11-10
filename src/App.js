import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Button from './Button'


class App extends Component {
  render() {
    return (
      <div className="App">        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button />
      </div>
    );
  }
}

export default App;
