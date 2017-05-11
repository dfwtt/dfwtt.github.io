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
      const LOGO = '/images/dfwtt.gif';
      const PAGE_LINKS = [
          { active: 'news', href: '#news', text: 'News' },
          { active: 'locations', href: '#locations', text: 'Locations' },
          { active: 'coaching', href: '#coaching', text: 'Coaching' },
          { active: 'membership', href: '#membership', text: 'Membership' }
      ];

      const LOCATIONS_TITLE = 'Locations';
      const LOCATIONS_SUMMARY = 'DFWTT regularly meets up at three superb locations in the northern DFW metroplex.';
      const LOCATIONS = [
          {
              image: '/images/cimarron.jpg',
              name: 'Cimarron Recreation Center',
              address: '265 Red River Trail, Irving, TX 75063',
              directions: 'http://maps.google.com/maps?um=1&tab=wl&hl=en&q=265%20Red%20River%20Trail%20TX',
          },
          {
              image: '/images/jcc.jpg',
              name: 'Jewish Community Center',
              address: '7900 Northaven Road, Dallas, TX 75230',
              directions: 'http://maps.google.com/maps?f=q&hl=en&geocode=&q=7900+Northaven+Road,+Dallas+75230&sll=37.0625,-95.677068&sspn=45.014453,81.738281&ie=UTF8&z=16&iwloc=addr&om=1',
          },
          {
              image: '/images/tbarm.jpg',
              name: 'T Bar M Racquet Club',
              address: '6060 Dilbeck Ln, Dallas, TX 75240',
              directions: 'https://www.google.com/maps/place/6060+Dilbeck+Ln,+Dallas,+TX+75240/@32.9292,-96.8036111,17z/data=!3m1!4b1!4m5!3m4!1s0x864c20fa8be63af1:0x96164675e63cb247!8m2!3d32.9292!4d-96.8014224?hl=en',
          }
      ];
    return (
      <div className='App'>
          <div id='top' />
          <Navbar
              logo={LOGO}
              pageLinks={PAGE_LINKS}
              active={activeScreenSegment} />
          <Introducer />
          <div id='news' />
          <News />
          <div id='locations' />
          <Locations
              title={LOCATIONS_TITLE}
              summary={LOCATIONS_SUMMARY}
              locations={LOCATIONS} />
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
