import React, { Component } from 'react';
import { Container, Grid, Image, Divider, Message } from 'semantic-ui-react';
import './Contact.css';

export default class Contact extends Component {
    render () {
        const { contact: { phone, email, location, github, linkedin } } = this.props;
        return (
            <Container className='Contact'>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <h3>Get in contact</h3>
                            <Divider />
                            <Message
                                size='large'
                                icon='mobile'
                                header='Call or text'
                                content={phone} />
                            <Message
                                size='large'
                                icon='mail'
                                header='Shoot me an email'
                                content={email} />
                            <Message
                                size='large'
                                icon='marker'
                                header="Where I'm at"
                                content={location} />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Find me on the web</h3>
                            <Divider />
                            <Message
                                size='large'
                                icon='github'
                                header='GitHub'
                                content={github} />
                            <Message
                                size='large'
                                icon='linkedin'
                                header='LinkedIn'
                                content={linkedin} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}