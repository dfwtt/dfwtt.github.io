import React, { Component } from 'react';
import { Segment, Image, Header, Button } from 'semantic-ui-react';
import './Introducer.css';

export default class Introducer extends Component {
    scrollToContent () {
        const overviewOffset = document.getElementById('overview').offsetTop;
        window.scrollTo(0, overviewOffset);
    }

    render () {
        const { siteHeader, tagline } = this.props;
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
                        textAlign='center'>{siteHeader}</Header>
                    <a href='#membership'>
                        <Button
                            primary
                            fluid
                            className='hero-button'>
                            {tagline} <i className='fa fa-caret-down' />
                        </Button>
                    </a>
                </Segment>
            </div>
        );
    }
}