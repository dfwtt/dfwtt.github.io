import React, { Component } from 'react';
import { Container, Image, Segment, Header, Button, Card } from 'semantic-ui-react';
import './Locations.css';

export default class Locations extends Component {
    render () {
        return (
            <div className='Locations ScreenSegment'>
                <Container>
                    <Segment raised>
                        <Header as='h2'>
                            Locations
                            <Button floated='right' compact>View schedule <i className='fa fa-chevron-right' /></Button>
                        </Header>
                        <Card.Group>
                            <Card>
                                <Image src='http://placehold.it/300x300/FAFAFA' />
                                <Card.Content>
                                    <Card.Header>Cimarron Recreation Center</Card.Header>
                                    <Card.Meta>265 Red River Trail, Irving, TX 75063</Card.Meta>
                                </Card.Content>
                                <Card.Content extra>
                                    <Button fluid>
                                        Get directions <i className='fa fa-chevron-right' />
                                    </Button>
                                </Card.Content>
                                <Card.Content extra>
                                    <Button fluid>
                                        View schedule <i className='fa fa-chevron-right' />
                                    </Button>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Segment>
                </Container>
            </div>
        );
    }
}