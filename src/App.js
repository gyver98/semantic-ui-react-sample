import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import HomepageLayout from './components/HomepageLayout';
import HeaderExampleImage from './components/HeaderExampleImage';
import CardExample from './components/CardExample';
import GridExampleDividedNumber from './GridExampleDividedNumber';


class App extends Component {
  render() {
    return (
    <div>
      <HomepageLayout />
    </div>
    )
  }
}

export default App;
