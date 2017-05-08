import React, { Component } from 'react';
import { Container, Segment, Header, Grid, Image, Button, Table, List, Message, Icon, Statistic } from 'semantic-ui-react';
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
                        <Table celled textAlign='center'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell></Table.HeaderCell>
                                    <Table.HeaderCell>Single lesson</Table.HeaderCell>
                                    <Table.HeaderCell>Four lessons</Table.HeaderCell>
                                    <Table.HeaderCell>Details</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>Juniors (U-10)</Statistic.Value>
                                            <Statistic.Label>Group</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell error />
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>$80.00</Statistic.Value>
                                            <Statistic.Label>$20.00 per lesson</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <List>
                                            <List.Item>Ten and under only.</List.Item>
                                            <List.Item>Two or more individuals.</List.Item>
                                            <List.Item>One hour per lesson.</List.Item>
                                        </List>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>Juniors (U-10)</Statistic.Value>
                                            <Statistic.Label>Individual</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell error />
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>$120.00</Statistic.Value>
                                            <Statistic.Label>$30.00 per lesson</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <List>
                                            <List.Item>Ten and under only.</List.Item>
                                            <List.Item>One hour per lesson.</List.Item>
                                        </List>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>Adults</Statistic.Value>
                                            <Statistic.Label>Individual</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>$40.00</Statistic.Value>
                                            <Statistic.Label>Baseline</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>$140.00</Statistic.Value>
                                            <Statistic.Label>$35.00 per lesson</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
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