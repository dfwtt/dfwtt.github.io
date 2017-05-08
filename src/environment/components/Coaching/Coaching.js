import React, { Component } from 'react';
import { Container, Segment, Header, Grid, Image, Button, Table, List, Message, Icon } from 'semantic-ui-react';
import './Coaching.css';

export default class Coaching extends Component {
    render () {
        return (
            <div id='coaching' className='Coaching ScreenSegment'>
                <Container>
                    <Segment raised>
                        <Header as='h2'>
                            Professional Coaching
                            <Button floated='right' compact>View instructors <i className='fa fa-chevron-right' /></Button>
                        </Header>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Lesson type</Table.HeaderCell>
                                    <Table.HeaderCell>Single lesson</Table.HeaderCell>
                                    <Table.HeaderCell>Four lessons</Table.HeaderCell>
                                    <Table.HeaderCell>Details</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Junior (U-10) (Group)</Table.Cell>
                                    <Table.Cell error>N/A</Table.Cell>
                                    <Table.Cell>$80 ($20 per)</Table.Cell>
                                    <Table.Cell>
                                        <List>
                                            <List.Item>Ten and under only.</List.Item>
                                            <List.Item>Two or more individuals.</List.Item>
                                            <List.Item>One hour per lesson.</List.Item>
                                        </List>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Junior (U-10) (Individual)</Table.Cell>
                                    <Table.Cell error>N/A</Table.Cell>
                                    <Table.Cell>$120 ($30 per)</Table.Cell>
                                    <Table.Cell>
                                        <List>
                                            <List.Item>Ten and under only.</List.Item>
                                            <List.Item>One hour per lesson.</List.Item>
                                        </List>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Adults (Individual)</Table.Cell>
                                    <Table.Cell>$40</Table.Cell>
                                    <Table.Cell>$140 ($35 per)</Table.Cell>
                                    <Table.Cell>
                                        <List>
                                            <List.Item>One hour per lesson.</List.Item>
                                        </List>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <Message negative>
                            <Message.Header>
                                <Icon name='info circle' /> Students who can’t attend scheduled class should call 24 hours before the class or they will be charged for a lesson.
                            </Message.Header>
                        </Message>
                    </Segment>
                </Container>
            </div>
        );
    }
}