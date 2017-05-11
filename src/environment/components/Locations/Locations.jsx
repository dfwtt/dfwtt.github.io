import React, { Component } from 'react';
import { Container, Image, Segment, Header, Button, Card, Message } from 'semantic-ui-react';
import { shouldBeCollapsed } from '../../shared/mobile';
import './Locations.css';

export default class Locations extends Component {
    render () {
        const { summary, locations, notice } = this.props;
        const fluid = shouldBeCollapsed();
        return (
            <div className='Locations ScreenSegment'>
                <Container>
                    <Segment raised>
                        <Header as='h2'>Locations</Header>
                        <p>{summary}</p>
                        <Card.Group>
                            {locations.map(location => (
                                <Card fluid={fluid}>
                                    <Image src={location.image} />
                                    <Card.Content>
                                        <Card.Header>{location.name}</Card.Header>
                                        <Card.Meta>{location.address}</Card.Meta>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a
                                            target='_blank'
                                            href={location.directions}>
                                            <Button fluid>
                                                Get directions <i className='fa fa-chevron-right' />
                                            </Button>
                                        </a>
                                    </Card.Content>
                                </Card>
                            ))}
                        </Card.Group>
                        <Message
                            textAlign='right'
                            attached='top'
                            negative>
                            <Message.Content><i className="fa fa-info" /> {notice}</Message.Content>
                        </Message>
                        <Message
                            textAlign='right'
                            attached='bottom'>
                            <Button
                                primary
                                fluid>
                                View full schedule <i className='fa fa-chevron-right' />
                            </Button>
                        </Message>
                    </Segment>
                </Container>
            </div>
        );
    }
}