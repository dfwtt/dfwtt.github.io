import React, { Component } from 'react';
import { Menu, Segment, Sidebar } from 'semantic-ui-react';
import './Navbar.css';

const MOBILE_SCREEN_SIZE = 680;

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: false,
            sidebarShowing: false
        };
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
        const { active } = this.props;
        const LOGO = '/images/dfwtt.gif';
        const PAGE_LINKS = [
            { active: 'news', href: '#news', text: 'News' },
            { active: 'locations', href: '#locations', text: 'Locations' },
            { active: 'coaching', href: '#coaching', text: 'Coaching' },
            { active: 'membership', href: '#membership', text: 'Membership' }
        ];
        return (
            <div>
                <Menu
                    className='Navbar'
                    fixed='top'>
                    <Menu.Item
                        active={active === null}
                        href='#top'>
                        <img src={LOGO} />
                    </Menu.Item>
                    {isCollapsed
                            ? (
                                <Menu.Item
                                    onClick={this.toggleSidebar}
                                    position='right'>
                                    <i className='fa fa-bars' />
                                </Menu.Item>

                            )
                            : this.generateLinks(PAGE_LINKS, active)}
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
                    {this.generateLinks(PAGE_LINKS, active)}
                </Sidebar>
            </div>
        );
    }
}