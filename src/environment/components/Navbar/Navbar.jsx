import React, { Component } from 'react';
import { Menu, Sidebar, Image } from 'semantic-ui-react';
import { shouldBeCollapsed } from '../../shared/mobile';
import './Navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { isCollapsed: shouldBeCollapsed(), sidebarShowing: false };
        this.adjustDisplay = this.adjustDisplay.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.setResizeListener();
    }

    setResizeListener = () => window.addEventListener('resize', this.adjustDisplay);

    setCollapsed = isCollapsed => this.setState({ isCollapsed });

    toggleSidebar = () => this.setState({ sidebarShowing: !this.state.sidebarShowing });

    generateLinks = (links, active) => links.map(link => (
        <Menu.Item
            key={link.text}
            onClick={() => this.state.sidebarShowing && this.toggleSidebar()}
            active={active === link.active}
            href={link.href}>
            {link.text}
        </Menu.Item>
    ));

    adjustDisplay() {
        const { isCollapsed, sidebarShowing } = this.state;
        if (shouldBeCollapsed() && !isCollapsed) this.setCollapsed(true);
        if (!shouldBeCollapsed() && isCollapsed) {
            this.setCollapsed(false);
            if (sidebarShowing) this.toggleSidebar();
        }
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
                            size='tiny'
                            alt='Company logo' />
                    </Menu.Item>
                    {isCollapsed
                        ? (
                            <Menu.Item
                                onClick={this.toggleSidebar}
                                position='right'>
                                <i className='fa fa-bars' />
                            </Menu.Item>
                        )
                        : (
                            <Menu.Menu position='right'>
                                {this.generateLinks(pageLinks, active)}
                            </Menu.Menu>
                        )}
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