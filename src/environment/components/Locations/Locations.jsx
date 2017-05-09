import React, { Component } from 'react';
import { Container, Image, Segment, Header, Button, Card, Grid } from 'semantic-ui-react';
import './Locations.css';

export default class Locations extends Component {
    render () {
        return (
            <div className='Locations ScreenSegment'>
                <Container>
                    <Segment raised>
                        <Header as='h2'>
                            Locations
                            <Button floated='right' compact>View full schedule <i className='fa fa-chevron-right' /></Button>
                        </Header>
                        <p>DFWTT regularly meets up at three superb locations in the northern DFW metroplex.</p>
                        <Grid columns={3}>
                            <Grid.Row>
                                <Grid.Column>
                                    <Card fluid>
                                        <Image src='/images/cimarron.jpg' />
                                        <Card.Content>
                                            <Card.Header>Cimarron Recreation Center</Card.Header>
                                            <Card.Meta>265 Red River Trail, Irving, TX 75063</Card.Meta>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <a
                                                target='_blank'
                                                href='http://maps.google.com/maps?um=1&tab=wl&hl=en&q=265%20Red%20River%20Trail%20TX'>
                                                <Button fluid>
                                                    Get directions <i className='fa fa-chevron-right' />
                                                </Button>
                                            </a>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <Button fluid primary>
                                                View schedule <i className='fa fa-chevron-right' />
                                            </Button>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card fluid>
                                        <Image src='/images/jcc.jpg' />
                                        <Card.Content>
                                            <Card.Header>Jewish Community Center</Card.Header>
                                            <Card.Meta>7900 Northaven Road, Dallas, TX 75230</Card.Meta>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <a
                                                target='_blank'
                                                href='http://maps.google.com/maps?f=q&hl=en&geocode=&q=7900+Northaven+Road,+Dallas+75230&sll=37.0625,-95.677068&sspn=45.014453,81.738281&ie=UTF8&z=16&iwloc=addr&om=1'>
                                                <Button fluid>
                                                    Get directions <i className='fa fa-chevron-right' />
                                                </Button>
                                            </a>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <Button fluid primary>
                                                View schedule <i className='fa fa-chevron-right' />
                                            </Button>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card fluid>
                                        <Image src='/images/tbarm.jpg' />
                                        <Card.Content>
                                            <Card.Header>T Bar M Racquet Club</Card.Header>
                                            <Card.Meta>6060 Dilbeck Ln, Dallas, TX 75240</Card.Meta>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <a
                                                target='_blank'
                                                href='https://www.google.com/maps/place/6060+Dilbeck+Ln,+Dallas,+TX+75240/@32.9292,-96.8036111,17z/data=!3m1!4b1!4m5!3m4!1s0x864c20fa8be63af1:0x96164675e63cb247!8m2!3d32.9292!4d-96.8014224?hl=en'>
                                                <Button fluid>
                                                    Get directions <i className='fa fa-chevron-right' />
                                                </Button>
                                            </a>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <Button fluid primary>
                                                View schedule <i className='fa fa-chevron-right' />
                                            </Button>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
            </div>
        );
    }
}