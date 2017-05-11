import React, { Component } from 'react';
import { Menu, Sidebar, Image } from 'semantic-ui-react';
import './Navbar.css';

const MOBILE_SCREEN_SIZE = 680;

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { isCollapsed: false, sidebarShowing: false };
        this.adjustDisplay = this.adjustDisplay.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.setResizeListener();
    }

    getBrowserWidth = () => window.innerWidth;

    setResizeListener = () => window.addEventListener('resize', this.adjustDisplay);

    setCollapsed = isCollapsed => this.setState({ isCollapsed });

    toggleSidebar = () => this.setState({ sidebarShowing: !this.state.sidebarShowing });

    adjustDisplay() {
        const { isCollapsed, sidebarShowing } = this.state;
        const mobileSized = this.getBrowserWidth() < MOBILE_SCREEN_SIZE;
        if (mobileSized && !isCollapsed) this.setCollapsed(true);
        if (!mobileSized && isCollapsed) {
            this.setCollapsed(false);
            if (sidebarShowing) this.toggleSidebar();
        }
    }

    generateLinks(links, active) {
        return links.map(link => (
            <Menu.Item
                active={active === link.active}
                href={link.href}>
                {link.text}
            </Menu.Item>
        ));
    }

    render () {
        const { isCollapsed, sidebarShowing } = this.state;
        const { active, logo, pageLinks } = this.props;
        return (
            <div>
                <Menu
                    className='Navbar'
                    fixed='top'>
                    <Menu.Item
                        active={active === null}
                        href='#top'>
                        <Image
                            src={logo}
                            alt='Company logo'/>
                    </Menu.Item>
                    {isCollapsed
                            ? (
                                <Menu.Item
                                    onClick={this.toggleSidebar}
                                    position='right'>
                                    <i className='fa fa-bars' />
                                </Menu.Item>
                            )
                            : this.generateLinks(pageLinks, active)}
                </Menu>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    className='mobile-menu'
                    width='thin'
                    direction='right'
                    visible={sidebarShowing}
                    vertical>
                    <Menu.Item onClick={this.toggleSidebar}>
                        <i className='fa fa-close' /> Close
                    </Menu.Item>
                    {this.generateLinks(pageLinks, active)}
                </Sidebar>
            </div>
        );
    }
}