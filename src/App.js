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

      const SITE_HEADER = 'Dallas/Fort Worth Table Tennis';
      const TAGLINE = 'Become a part of something great';

      const NEWS_TITLE = 'Current News';
      const CURRENT_TITLE =  '2017 DFWTT Spring Open';
      const CURRENT_DESCRIPTION = 'DFWTT hosted its yearly Spring Open on April 29th. The tournament was held in Dallas at the T Bar M Racquet Club and featured both USATT sanctioned and non-sanctioned events. There were 99 players who competed in these events. Thanks to everyone who attended the tournament.';

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
      const NOTICE = 'Jewish Community Center: Use upper level parking lots only and use the Health & Fitness Complex entrance door located on North side of building. Sign in at front desk.';

      const COACHING_TITLE = 'Professional Coaching';
      const COACHING_SUMMARY = 'If you\'re serious about table tennis, and taking it to the next level is on your todo list, coaching is your best bet. Interact with some of the best players DFW has to offer and learn something new.';
      const COACHING = [
          {
              type: 'JUNIORS (U-10)',
              size: 'Group',
              single: null,
              four: 80.00,
              details: ['Ten and under only', 'Two or more individuals', 'One hour per lesson'],
          },
          {
              type: 'JUNIORS (U-10)',
              size: 'Individual',
              single: null,
              four: 120.00,
              details: ['Ten and under only', 'One hour per lesson'],
          },
          {
              type: 'Adult',
              size: 'Individual',
              single: 40.00,
              four: 140.00,
              details: ['One hour per lesson'],
          }
      ];
      const INSTRUCTORS = [
          {
              image: 'http://dfwtt.com/images/Donna.jpg',
              name: 'Donna Chen',
              rating: 2000,
              education: [
                  'Masters Degree in Public Administration',
                  'Major: Public Administration, Management',
                  'Minor: Psychology, Human Relations',
                  'Graduate Studies: Computer Sciences',
              ],
              background: [
                  '2000 US Closed Women O-40 National Runner Up',
                  '2000 US Open Women O-40 National 3rd',
                  '1998 Best Western Region Coach',
                  '1998 TX Open International Disabled Team Coordinator',
                  '1998 US Open Women O-40 all-star National Champion',
                  '1997 US Open Women O-40 International Champion',
                  '1997 The International Table Tennis Federation certified International Assistant Coach',
                  '1998 USATT certified Assistant Regional Coach',
                  '1998 USATT certified Club Umpire',
                  '1995 USATT certified Assistant Club Coach',
              ]
          },
          {
              image: 'http://dfwtt.com/images/Daniel_Rutenberg_Table_Tennis.JPG',
              name: 'Daniel Rutenberg',
              rating: 2000,
              education: [
                  'Bachelor Degree in Business Administration',
                  'Masters in Business Administration',
                  'International Direct Marketer of the Year 2007'
              ],
              background: [
                  'USATT 2012 Paralympic Coach of the Year',
                  'USATT Junior Advisory Committee - Member',
                  'USATT Coaching Adivsory Committee - Member',
                  'USATT Para Table Tennis Task Force - Staff Liaison',
                  '2010-2012 USATT Paralympic National Team Coach',
                  'ITTF PTT Level 1 Coach Certification',
                  'ITTF PTT Course Conductor',
                  'Active USATT member',
                  'USATT certified Umpire',
                  'USATT National Coach',
                  'Specializing in Junior training',
                  'USATT 2010 Paralympic Coach of the Year',
                  'USATT 2009 Paralympic Coach of the Year',
                  '2009 ParaPanAmerican Table Tennis Championship, Margarita Island, Venezuela - Team USA Head Coach',
                  'Selected as one of five finalists for the Volunteer Coach of the Year 2005 U.S. Olympic Committee\'s (USOC)  Coach of the Year Program',
                  '2005 USATT Volunteer Coach of the Year',
                  '2007, 2008 and 2009 instructor at Tzu Chi Foundation U.S. - School',
                  '2005-2013 Maccabi Games Team Dallas - Table Tennis Head Coach',
                  '2005 & 2006 Sport Information Supervisor NCTTA and ACIU Collegiate Championship',
                  '1989 Created Table Tennis Club at Syracuse University',
                  '1974-1979 Played for Venezuelan Junior Table Tennis team',
              ]
          },
          {
              image: 'http://dfwtt.com/images/Scott.JPG',
              name: 'Scott Ryan',
              rating: 2179,
              education: [
                  'Bachelor Degree in Business Administration in Business Information Computer Systems',
              ],
              background: [
                  'International Umpire Certified Referee',
                  'Wheel Chair Certified Umpire',
                  '1999 US Open, 2nd Place - Senior Mixed Double',
                  'College ACUI Region 12, 1st Place - Men\'s Singles and Doubles',
                  '1980 US Open (U2350 Semifinalist)',
                  'Germany: TSV 1860 Bundesliga Regional League, "A" Player with 20-1 Record',
                  'Austria Summer Regional South: 1st Place - Open Singles, 1st Place - Open Doubles',
                  'Bavaria Regional Championships: 2nd Place - Class A Singles, 3rd Place - Class A Doubles',
                  '1977 US Open (U2200 Quarter Finalist)',
                  '1975 US Open (U2100 Semifinalist)',
                  '1974 US Open (U2000 Quarter Finalist)',
              ]
          },
          {
              image: 'http://dfwtt.com/Coaching_Files/Nelson.jpg',
              name: 'Nelson Ramos',
              rating: 2000,
              education: [
                  'My table tennis training began when I was 7 years old.',
                  'I have since played in various locations around the world including the United States, China, Honduras, and Japan.',
              ],
              background: [
                    'International Federation of Table Tennis since 1988',
                    'United States Association of Table Tennis since 1987',
                    '2011 DFWTT Spring Open: 2nd Place - Class A Singles, 3rd Place - Class A Doubles',
                    '2011 Texas Winter Games: 3rd Place - Class A Singles, 2nd Place - Class A Doubles',
                    '2010 DFWTT Fall Open: 3rd Place - Class A Singles',
                    '2010 DFWTT Spring Open: 1st Place - U2400',
                    '2010 Texas Winter Games: 2nd Place - U2400',
                    '2009 DFWTT Fall Open: 2nd Place - U2400',
                    '2005 Double Ten: 1st Place - Class A Doubles',
                    '2004 DFWTT Fall Open: 1st Place - Class A Singles',
                    '2003 DFWTT Summer RR: 2nd Place - Class A Singles, 2nd Place - Class A Doubles',
                    'Mayor Individual Champion (Honduras)',
                    'Mixed Doubles Champion (Central America and Mexico)',
                    '2nd Place Male Doubles Mayor (Central America)',
                    'Youth Individual National Champion (Honduras)',
                    'National Champion - Mixed Doubles (Honduras)',
                    'Sub-Champion Central America (Guatemala)',
                    '3rd Place at the Latin American level (Cuba)',
                    'Children’s National Champion (Honduras)',
                    'Children National Champion - Mixed Doubles (Honduras)',
                    'Children’s National Champion - Doubles (Honduras)',
                    'Champion Mixed Doubles (Central America)',
                    'Sub-Champion - Individual (Central America)',
                    'Children’s Teams Champion (Central America)',
              ]
          }
      ];

    return (
      <div className='App'>
          <div id='top' />
          <Navbar
            logo={LOGO}
            pageLinks={PAGE_LINKS}
            active={activeScreenSegment} />
          <Introducer
            siteHeader={SITE_HEADER}
            tagline={TAGLINE} />
          <div id='news' />
          <News
            title={NEWS_TITLE}
            currentTitle={CURRENT_TITLE}
            currentDescription={CURRENT_DESCRIPTION}/>
          <div id='locations' />
          <Locations
            title={LOCATIONS_TITLE}
            summary={LOCATIONS_SUMMARY}
            locations={LOCATIONS}
            notice={NOTICE} />
          <div id='coaching' />
          <Coaching
            title={COACHING_TITLE}
            summary={COACHING_SUMMARY}
            coaching={COACHING}
            instructors={INSTRUCTORS} />
          <div id='membership' />
          <Membership/>
          <Footer />
      </div>
    );
  }
}

export default App;
