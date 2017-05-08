import React, { Component } from 'react';
import { Segment, Image, Header, Button } from 'semantic-ui-react';
import './Introducer.css';

export default class Introducer extends Component {
    scrollToContent () {
        const overviewOffset = document.getElementById('overview').offsetTop;
        window.scrollTo(0, overviewOffset);
    }

    render () {
        return (
            <div className='Introducer'>
                <Segment
                    compact
                    padded>
                    <Image
                        size='large'
                        src='/images/dfwtt.gif' />
                    <Header
                        as='h1'
                        textAlign='center'>Dallas/Fort Worth Table Tennis</Header>
                    <a href='#membership'>
                        <Button
                            primary
                            fluid
                            className='hero-button'>
                            Become a part of something great <i className='fa fa-caret-down' />
                        </Button>
                    </a>
                </Segment>
            </div>
        );
    }
}