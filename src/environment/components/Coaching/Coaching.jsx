import React, { Component } from 'react';
import { Container, Segment, Header, Card, Image, Button, Table, List, Message, Icon, Statistic, Grid } from 'semantic-ui-react';
import './Coaching.css';

export default class Coaching extends Component {
    constructor (props) {
        super(props);
        this.state = { activeSegment: 'coaching' };
    }

    toggleActiveSegment () {
        const { activeSegment } = this.state;
        activeSegment === 'coaching'
            ? this.setState({ activeSegment: 'instructors' })
            : this.setState({ activeSegment: 'coaching' });
    }

    render () {
        const { activeSegment } = this.state;
        return (
            <div className='Coaching ScreenSegment'>
                <Container>
                    {activeSegment === 'coaching'
                        ? (
                            <Segment raised>
                                <Header as='h2'>
                                    Professional Coaching
                                    <Button onClick={() => this.toggleActiveSegment()} floated='right' compact>View instructors <i className='fa fa-chevron-right' /></Button>
                                </Header>
                                <p>If you're serious about table tennis, and taking it to the next level is on your todo list, coaching is your best bet. Interact with some of the best players DFW has to offer and learn something new.</p>
                                <Table celled textAlign='center'>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell></Table.HeaderCell>
                                            <Table.HeaderCell>Single lesson</Table.HeaderCell>
                                            <Table.HeaderCell>Four lessons</Table.HeaderCell>
                                            <Table.HeaderCell>Details</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Statistic>
                                                    <Statistic.Value text>Juniors (U-10)</Statistic.Value>
                                                    <Statistic.Label>Group</Statistic.Label>
                                                </Statistic>
                                            </Table.Cell>
                                            <Table.Cell error />
                                            <Table.Cell>
                                                <Statistic>
                                                    <Statistic.Value text>$80.00</Statistic.Value>
                                                    <Statistic.Label>$20.00 per lesson</Statistic.Label>
                                                </Statistic>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <List>
                                                    <List.Item>Ten and under only.</List.Item>
                                                    <List.Item>Two or more individuals.</List.Item>
                                                    <List.Item>One hour per lesson.</List.Item>
                                                </List>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Statistic>
                                                    <Statistic.Value text>Juniors (U-10)</Statistic.Value>
                                                    <Statistic.Label>Individual</Statistic.Label>
                                                </Statistic>
                                            </Table.Cell>
                                            <Table.Cell error />
                                            <Table.Cell>
                                                <Statistic>
                                                    <Statistic.Value text>$120.00</Statistic.Value>
                                                    <Statistic.Label>$30.00 per lesson</Statistic.Label>
                                                </Statistic>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <List>
                                                    <List.Item>Ten and under only.</List.Item>
                                                    <List.Item>One hour per lesson.</List.Item>
                                                </List>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Statistic>
                                                    <Statistic.Value text>Adults</Statistic.Value>
                                                    <Statistic.Label>Individual</Statistic.Label>
                                                </Statistic>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Statistic>
                                                    <Statistic.Value text>$40.00</Statistic.Value>
                                                    <Statistic.Label>Baseline</Statistic.Label>
                                                </Statistic>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Statistic>
                                                    <Statistic.Value text>$140.00</Statistic.Value>
                                                    <Statistic.Label>$35.00 per lesson</Statistic.Label>
                                                </Statistic>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <List>
                                                    <List.Item>One hour per lesson.</List.Item>
                                                </List>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                                <Message negative>
                                    <Message.Header>
                                        <Icon name='info circle' /> Students who can’t attend scheduled class should call 24 hours before the class or they will be charged for a lesson.
                                    </Message.Header>
                                </Message>
                            </Segment>
                        )
                        : (
                            <Segment raised>
                                <Header as='h2'>
                                    Our Instructors
                                    <Button onClick={() => this.toggleActiveSegment()} floated='right' compact>View coaching plans <i className='fa fa-chevron-right' /></Button>
                                </Header>
                                <p>Our top-notch instructors are more than just talented players -- they're experienced tutors who will form a bond with you and guide you on your path to table tennis glory.</p>
                                <Segment stacked fluid>
                                    <Grid columns={2}>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Card fluid>
                                                    <Image src='http://dfwtt.com/images/Donna.jpg' centered />
                                                    <Card.Content>
                                                        <Card.Header>Donna Chen</Card.Header>
                                                        <Card.Meta>USATT Rating: 2000</Card.Meta>
                                                    </Card.Content>
                                                    <Card.Content extra>
                                                        <Card.Header>Education</Card.Header>
                                                        <Card.Description>
                                                            <List>
                                                                <List.Item>Masters Degree in Public Administration</List.Item>
                                                                <List.Item>Major: Public Administration, Management</List.Item>
                                                                <List.Item>Minor: Psychology, Human Relations</List.Item>
                                                                <List.Item>Graduate Studies: Computer Sciences</List.Item>
                                                            </List>
                                                        </Card.Description>
                                                    </Card.Content>
                                                    <Card.Content extra>
                                                        <Card.Header>Table Tennis Background</Card.Header>
                                                        <Card.Description>
                                                            <List>
                                                                <List.Item>2000 US Closed Women O-40 National Runner Up</List.Item>
                                                                <List.Item>2000 US Open Women O-40 National 3rd</List.Item>
                                                                <List.Item>1998 Best Western Region Coach</List.Item>
                                                                <List.Item>1998 TX Open International Disabled Team Coordinator</List.Item>
                                                                <List.Item>1998 US Open Women O-40 all-star National Champion</List.Item>
                                                                <List.Item>1997 US Open Women O-40 International Champion</List.Item>
                                                                <List.Item>1997 The International Table Tennis Federation certified International Assistant Coach</List.Item>
                                                                <List.Item>1998 USATT certified Assistant Regional Coach</List.Item>
                                                                <List.Item>1998 USATT certified Club Umpire</List.Item>
                                                                <List.Item>1995 USATT certified Assistant Club Coach</List.Item>
                                                            </List>
                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Card fluid>
                                                    <Image src='http://dfwtt.com/images/Daniel_Rutenberg_Table_Tennis.JPG' centered />
                                                    <Card.Content>
                                                        <Card.Header>Daniel Rutenberg</Card.Header>
                                                        <Card.Meta>USATT Rating: 2000</Card.Meta>
                                                    </Card.Content>
                                                    <Card.Content extra>
                                                        <Card.Header>Education</Card.Header>
                                                        <Card.Description>
                                                            <List>
                                                                <List.Item>Bachelor Degree in Business Administration</List.Item>
                                                                <List.Item>Masters in Business Administration</List.Item>
                                                                <List.Item>International Direct Marketer of the Year 2007</List.Item>
                                                            </List>
                                                        </Card.Description>
                                                    </Card.Content>
                                                    <Card.Content extra>
                                                        <Card.Header>Table Tennis Background</Card.Header>
                                                        <Card.Description>
                                                            <List>
                                                                <List.Item>USATT 2012 Paralympic Coach of the Year</List.Item>
                                                                <List.Item>USATT Junior Advisory Committee - Member</List.Item>
                                                                <List.Item>USATT Coaching Adivsory Committee - Member</List.Item>
                                                                <List.Item>USATT Para Table Tennis Task Force - Staff Liaison</List.Item>
                                                                <List.Item>2010-2012 USATT Paralympic National Team Coach</List.Item>
                                                                <List.Item>ITTF PTT Level 1 Coach Certification</List.Item>
                                                                <List.Item>ITTF PTT Course Conductor</List.Item>
                                                                <List.Item>Active USATT member</List.Item>
                                                                <List.Item>USATT certified Umpire</List.Item>
                                                                <List.Item>USATT National Coach</List.Item>
                                                                <List.Item>Specializing in Junior training</List.Item>
                                                                <List.Item>USATT 2010 Paralympic Coach of the Year</List.Item>
                                                                <List.Item>USATT 2009 Paralympic Coach of the Year</List.Item>
                                                                <List.Item>2009 ParaPanAmerican Table Tennis Championship, Margarita Island, Venezuela - Team USA Head Coach</List.Item>
                                                                <List.Item>Selected as one of five finalists for the Volunteer Coach of the Year 2005 U.S. Olympic Committee's (USOC)  Coach of the Year Program</List.Item>
                                                                <List.Item>2005 USATT Volunteer Coach of the Year</List.Item>
                                                                <List.Item>2007, 2008 and 2009 instructor at Tzu Chi Foundation U.S. - School</List.Item>
                                                                <List.Item>2005-2013 Maccabi Games Team Dallas - Table Tennis Head Coach</List.Item>
                                                                <List.Item>2005 & 2006 Sport Information Supervisor NCTTA and ACIU Collegiate Championship</List.Item>
                                                                <List.Item>1989 Created Table Tennis Club at Syracuse University</List.Item>
                                                                <List.Item>1974-1979 Played for Venezuelan Junior Table Tennis team</List.Item>
                                                            </List>
                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Card fluid>
                                                    <Image src='http://dfwtt.com/images/Scott.JPG' size='small' centered />
                                                    <Card.Content>
                                                        <Card.Header>Scott Ryan</Card.Header>
                                                        <Card.Meta>USATT Rating: 2179</Card.Meta>
                                                    </Card.Content>
                                                    <Card.Content extra>
                                                        <Card.Header>Education</Card.Header>
                                                        <Card.Description>
                                                            Bachelor Degree in Business Administration in Business Information Computer Systems
                                                        </Card.Description>
                                                    </Card.Content>
                                                    <Card.Content extra>
                                                        <Card.Header>Table Tennis Background</Card.Header>
                                                        <Card.Description>
                                                            <List>
                                                                <List.Item>International Umpire Certified Referee</List.Item>
                                                                <List.Item>Wheel Chair Certified Umpire</List.Item>
                                                                <List.Item>1999 US Open, 2nd Place - Senior Mixed Double</List.Item>
                                                                <List.Item>College ACUI Region 12, 1st Place - Men's Singles and Doubles</List.Item>
                                                                <List.Item>1980 US Open (U2350 Semifinalist)</List.Item>
                                                                <List.Item>Germany: TSV 1860 Bundesliga Regional League, "A" Player with 20-1 Record</List.Item>
                                                                <List.Item>Austria Summer Regional South: 1st Place - Open Singles, 1st Place - Open Doubles</List.Item>
                                                                <List.Item>Bavaria Regional Championships: 2nd Place - Class A Singles, 3rd Place - Class A Doubles</List.Item>
                                                                <List.Item>1977 US Open (U2200 Quarter Finalist)</List.Item>
                                                                <List.Item>1975 US Open (U2100 Semifinalist)</List.Item>
                                                                <List.Item>1974 US Open (U2000 Quarter Finalist)</List.Item>
                                                            </List>
                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Card fluid>
                                                    <Image src='http://dfwtt.com/Coaching_Files/Nelson.jpg' size='small' centered />
                                                    <Card.Content>
                                                        <Card.Header>Nelson Ramos</Card.Header>
                                                        <Card.Meta>USATT Rating: 2000</Card.Meta>
                                                    </Card.Content>
                                                    <Card.Content extra>
                                                        <Card.Header>Education</Card.Header>
                                                        <Card.Description>
                                                            My table tennis training began when I was 7 years old. I have since played in various locations around the world including the United States, China, Honduras, and Japan.
                                                        </Card.Description>
                                                    </Card.Content>
                                                    <Card.Content extra>
                                                        <Card.Header>Table Tennis Background</Card.Header>
                                                        <Card.Description>
                                                            <List>
                                                                <List.Item>International Federation of Table Tennis since 1988</List.Item>
                                                                <List.Item>United States Association of Table Tennis since 1987</List.Item>
                                                                <List.Item>2011 DFWTT Spring Open: 2nd Place - Class A Singles, 3rd Place - Class A Doubles</List.Item>
                                                                <List.Item>2011 Texas Winter Games: 3rd Place - Class A Singles, 2nd Place - Class A Doubles</List.Item>
                                                                <List.Item>2010 DFWTT Fall Open: 3rd Place - Class A Singles</List.Item>
                                                                <List.Item>2010 DFWTT Spring Open: 1st Place - U2400</List.Item>
                                                                <List.Item>2010 Texas Winter Games: 2nd Place - U2400</List.Item>
                                                                <List.Item>2009 DFWTT Fall Open: 2nd Place - U2400</List.Item>
                                                                <List.Item>2005 Double Ten: 1st Place - Class A Doubles</List.Item>
                                                                <List.Item>2004 DFWTT Fall Open: 1st Place - Class A Singles</List.Item>
                                                                <List.Item>2003 DFWTT Summer RR: 2nd Place - Class A Singles, 2nd Place - Class A Doubles</List.Item>
                                                                <List.Item>Mayor Individual Champion (Honduras)</List.Item>
                                                                <List.Item>Mixed Doubles Champion (Central America and Mexico)</List.Item>
                                                                <List.Item>2nd Place Male Doubles Mayor (Central America)</List.Item>
                                                                <List.Item>Youth Individual National Champion (Honduras)</List.Item>
                                                                <List.Item>National Champion - Mixed Doubles (Honduras)</List.Item>
                                                                <List.Item>Sub-Champion Central America (Guatemala)</List.Item>
                                                                <List.Item>3rd Place at the Latin American level (Cuba)</List.Item>
                                                                <List.Item>Children’s National Champion (Honduras)</List.Item>
                                                                <List.Item>Children National Champion - Mixed Doubles (Honduras)</List.Item>
                                                                <List.Item>Children’s National Champion - Doubles (Honduras)</List.Item>
                                                                <List.Item>Champion Mixed Doubles (Central America)</List.Item>
                                                                <List.Item>Sub-Champion - Individual (Central America)</List.Item>
                                                                <List.Item>Children’s Teams Champion (Central America)</List.Item>
                                                            </List>
                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Segment>
                        )}
                </Container>
            </div>
        );
    }
}