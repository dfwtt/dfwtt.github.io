import React, { Component } from 'react';
import { Container, Segment, Item, Header, Message, Button } from 'semantic-ui-react';
import './News.css';

export default class News extends Component {
    render () {
        const { title, currentTitle, currentDescription } = this.props;
        return (
            <div className='News ScreenSegment'>
                <Container>
                    <Segment raised>
                        <Header as='h2'>{title}</Header>
                        <Item.Group>
                            <Item>
                                <Item.Image
                                    size='medium'
                                    src='/images/2017springopen.jpg' />
                                <Item.Content>
                                    <Item.Header as='h3'>{currentTitle}</Item.Header>
                                    <Item.Description>
                                        {currentDescription}
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