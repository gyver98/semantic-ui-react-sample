import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Button from './Button';
import HeaderAttached from './components/HeaderAttached';


class App extends Component {
  render() {
    return (
    <div>
      <HeaderAttached />
      <Button />
    </div>
    )
  }
}

export default App;
