import React, { Component } from 'react';
import { Container, Segment, Header, Table, List, Message, Icon, Statistic } from 'semantic-ui-react';
import './Membership.css';

export default class Membership extends Component {
    render () {
        // Get to this next! :^)
        const { title, summary, perks, packages } = this.props;
        return (
            <div className='Membership ScreenSegment'>
                <Container>
                    <Segment raised>
                        <Header as='h2'>
                            {title}
                        </Header>
                        <p>{summary}</p>
                        <Header as='h4'>Perks include:</Header>
                        <List divided>
                            {perks.map(perk => <List.Item>{perk}</List.Item>)}
                        </List>
                        <Table celled textAlign='center'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell></Table.HeaderCell>
                                    <Table.HeaderCell>One month</Table.HeaderCell>
                                    <Table.HeaderCell>Three months</Table.HeaderCell>
                                    <Table.HeaderCell>Six months</Table.HeaderCell>
                                    <Table.HeaderCell>One year</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>Single</Statistic.Value>
                                            <Statistic.Label>One individual</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>$20.00</Statistic.Value>
                                            <Statistic.Label>Baseline</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>$55.00</Statistic.Value>
                                            <Statistic.Label>Save $20.00</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>$90.00</Statistic.Value>
                                            <Statistic.Label>Save $60.00</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell positive>
                                        <Statistic>
                                            <Statistic.Value text>$150.00</Statistic.Value>
                                            <Statistic.Label>Save $90.00</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>Family</Statistic.Value>
                                            <Statistic.Label>Two individuals</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>$35.00</Statistic.Value>
                                            <Statistic.Label>Baseline</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>$85.00</Statistic.Value>
                                            <Statistic.Label>Save $80.00</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>$135.00</Statistic.Value>
                                            <Statistic.Label>Save $150.00</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell positive>
                                        <Statistic>
                                            <Statistic.Value text>$220.00</Statistic.Value>
                                            <Statistic.Label>Save $200.00</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>Family</Statistic.Value>
                                            <Statistic.Label>Three individuals</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>$45.00</Statistic.Value>
                                            <Statistic.Label>Baseline</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>$110.00</Statistic.Value>
                                            <Statistic.Label>Save $100.00</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Statistic>
                                            <Statistic.Value text>$180.00</Statistic.Value>
                                            <Statistic.Label>Save $180.00</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                    <Table.Cell positive>
                                        <Statistic>
                                            <Statistic.Value text>$270.00</Statistic.Value>
                                            <Statistic.Label>Save $270.00</Statistic.Label>
                                        </Statistic>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <Message negative>
                            <Message.Header>
                                <Icon name='info circle' /> A $3.00 drop by fee will be charged to any non-member who participates.
                            </Message.Header>
                        </Message>
                    </Segment>
                </Container>
            </div>
        );
    }
}