import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './Navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { isCollapsed: false };
        this.adjustDisplay = this.adjustDisplay.bind(this);
        this.setResizeListener();
    }

    setResizeListener() { window.addEventListener('resize', this.adjustDisplay); }

    adjustDisplay() {
        const { isCollapsed } = this.state;
        const mobileSized = this.getBrowserWidth() < 680;
        if (mobileSized && !isCollapsed) this.toggleCollapsed(true);
        if (!mobileSized && isCollapsed) this.toggleCollapsed(false);
    }

    toggleCollapsed(isCollapsed) { this.setState({ isCollapsed }); }

    getBrowserWidth() { return window.innerWidth; }

    render () {
        const { isCollapsed } = this.state;
        const { active } = this.props;
        const largeMenuStyle = { display: isCollapsed ? 'none' : 'flex' };
        return (
            <div>
                <Menu style={largeMenuStyle} className='Navbar' fixed='top'>
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
            </div>
        );
    }
}