import React, { Component } from 'react';
import './App.css';
import Introducer from './environment/components/Introducer/Introducer';
import News from './environment/components/News/News';
import Locations from './environment/components/Locations/Locations';
import Coaching from './environment/components/Coaching/Coaching';
import Membership from './environment/components/Membership/Membership';
import Footer from './environment/components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <div id='top' />
          <Introducer />
          <News />
          <Locations />
          <Coaching />
          <Membership/>
          <Footer />
      </div>
    );
  }
}

export default App;
