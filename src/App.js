import React, { Component } from 'react';
import './App.css';
import Navbar from './environment/components/Navbar/Navbar';
import Introducer from './environment/components/Introducer/Introducer';
import News from './environment/components/News/News';
import Locations from './environment/components/Locations/Locations';
import Coaching from './environment/components/Coaching/Coaching';
import Membership from './environment/components/Membership/Membership';
import Footer from './environment/components/Footer/Footer';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = { activeScreenSegment: null };
      this.setWindowScrollListener();
  }

  getActiveScreenSegment() {
      return this.state.activeScreenSegment;
  }

  setActiveScreenSegment(activeScreenSegment) {
      this.setState({ activeScreenSegment });
  }

  setWindowScrollListener() {
      window.addEventListener('scroll', () => {
          const newsOffset = document.getElementById('news').offsetTop;
          const locationsOffset = document.getElementById('locations').offsetTop;
          const coachingOffset = document.getElementById('coaching').offsetTop;
          const membershipOffset = document.getElementById('membership').offsetTop;
          const offset = window.pageYOffset + 50;
          const active = this.getActiveScreenSegment();

          if ((offset >= newsOffset && offset < locationsOffset) && active !== 'news') this.setActiveScreenSegment('news');
          else if ((offset >= locationsOffset && offset < coachingOffset) && active !== 'locations') this.setActiveScreenSegment('locations');
          else if ((offset >= coachingOffset && offset < membershipOffset) && active !== 'coaching') this.setActiveScreenSegment('coaching');
          else if (offset >= membershipOffset && active !== 'membership') this.setActiveScreenSegment('membership');
          else if ((offset < newsOffset) && active !== null) this.setActiveScreenSegment(null);
      });
  }

  render() {
    const { activeScreenSegment } = this.state;
    return (
      <div className='App'>
          <div id='top' />
          <Navbar active={activeScreenSegment} />
          <Introducer />
          <div id='news' />
          <News />
          <div id='locations' />
          <Locations />
          <div id='coaching' />
          <Coaching />
          <div id='membership' />
          <Membership/>
          <Footer />
      </div>
    );
  }
}

export default App;
