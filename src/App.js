import React, { Component } from 'react';
import './App.css';
import Introducer from './environment/components/Introducer/Introducer';
import News from './environment/components/News/News';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <Introducer />
          <News />
      </div>
    );
  }
}

export default App;
