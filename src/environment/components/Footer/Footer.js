import React, { Component } from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';
import './Footer.css';

export default class Footer extends Component {
    render () {
        return (
            <div className='Footer'>
                <Container textAlign='right'>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <a href='#top'>
                                    <Button fluid>Back to top <i className='fa fa-chevron-up' /></Button>
                                </a>
                            </Grid.Column>
                            <Grid.Column>
                                Copyright &copy; 2017, Connor Bryan and DFWTT. All rights reserved.
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}