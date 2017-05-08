import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import './App.css';
import Introducer from './environment/components/Introducer/Introducer';
import News from './environment/components/News/News';
import Locations from './environment/components/Locations/Locations';
import Coaching from './environment/components/Coaching/Coaching';
import Membership from "./environment/components/Membership/Membership";

class App extends Component {
  render() {
    return (
      <div className='App'>
          <Introducer />
          <News />
          <Divider />
          <Locations />
          <Divider />
          <Coaching />
          <Divider />
          <Membership/>
      </div>
    );
  }
}

export default App;
