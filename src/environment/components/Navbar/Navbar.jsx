import React, { Component } from 'react';
import { Container, Segment, Header, Grid, Image, Button, Menu } from 'semantic-ui-react';
import './Navbar.css';

export default class Navbar extends Component {
    render () {
        const { active } = this.props;
        return (
            <Menu className='Navbar' fixed='top' stackable>
                <Menu.Item active={active === null} href='#top'>
                    <img src='/images/dfwtt.gif'/>
                </Menu.Item>
                    <Menu.Item active={active === 'news'} href='#news'>
                        News
                    </Menu.Item>
                    <Menu.Item active={active === 'locations'} href='#locations'>
                        Locations
                    </Menu.Item>
                    <Menu.Item active={active === 'coaching'} href='#coaching'>
                        Coaching
                    </Menu.Item>
                    <Menu.Item active={active === 'membership'} href='#membership'>
                        Membership
                    </Menu.Item>
            </Menu>
        );
    }
}