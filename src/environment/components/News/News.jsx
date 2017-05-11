import React, { Component } from 'react';
import { Container, Segment, Item, Header, Message, Button } from 'semantic-ui-react';
import './News.css';

export default class News extends Component {
    render () {
        return (
            <div className='News ScreenSegment'>
                <Container>
                    <Segment raised>
                        <Header as='h2'>Current News</Header>
                        <Item.Group>
                            <Item>
                                <Item.Image
                                    size='medium'
                                    src='/images/2017springopen.jpg'
                                    href='/images/2017springopen.jpg' />
                                <Item.Content>
                                    <Item.Header as='h3'>2017 DFWTT Spring Open</Item.Header>
                                    <Item.Description>
                                        DFWTT hosted its yearly Spring Open on April 29th. The tournament was held in Dallas at the T Bar M Racquet Club and featured both USATT sanctioned and non-sanctioned events. There were 99 players who competed in these events. Thanks to everyone who attended the tournament.
                                    </Item.Description>
                                    <Item.Meta>
                                            <Button>View Grant Bergmann's Photos <i className='fa fa-chevron-right' /></Button>
                                            <Button primary>View Results <i className='fa fa-chevron-right' /></Button>
                                    </Item.Meta>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                        <Message
                            textAlign='right'
                            attached='bottom'>
                                <Button
                                    primary
                                    fluid>
                                    View more news <i className='fa fa-chevron-right' />
                                </Button>
                        </Message>
                    </Segment>
                </Container>
            </div>
        );
    }
}