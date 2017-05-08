import React, { Component } from 'react';
import { Container, Segment, Header, Grid, Image, Button } from 'semantic-ui-react';
import './News.css';

export default class News extends Component {
    render () {
        return (
            <div id='news' className='News ScreenSegment'>
                <Container>
                    <Segment raised>
                        <Header as='h2'>
                            Current News
                            <Button floated='right' compact>More news <i className='fa fa-chevron-right' /></Button>
                        </Header>
                        <Grid columns={3}>
                            <Grid.Row>
                                <Grid.Column>
                                    <Image size='medium' src='http://placehold.it/300x300/FAFAFA' />
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Header as='h3'>2017 DFWTT Spring Open</Header>
                                    <p>DFWTT hosted its yearly Spring Open on April 29th. The tournament was held in Dallas at the T Bar M Racquet Club and featured both USATT sanctioned and non-sanctioned events. There were 99 players who competed in these events. Thanks to everyone who attended the tournament.</p>
                                    <span>
                                        <Button float='left'>View Grant Bergmann's Photos <i className='fa fa-chevron-right' /></Button>
                                        <Button float='right' primary>View Results <i className='fa fa-chevron-right' /></Button>
                                    </span>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
            </div>
        );
    }
}