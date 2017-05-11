import React, { Component } from 'react';
import numeral from 'numeral';
import { Divider, Container, Segment, Header, Card, Item, List, Message, Icon, Statistic } from 'semantic-ui-react';
import { shouldBeCollapsed } from '../../shared/mobile';
import './Coaching.css';

export default class Coaching extends Component {
    render () {
        const { title, summary, coaching, instructors } = this.props;
        const centered = shouldBeCollapsed();
        return (
            <div className='Coaching ScreenSegment'>
                <Container>
                    <Segment raised>
                        <Header as='h2'>{title}</Header>
                        <p>{summary}</p>
                        <Card.Group>
                            {coaching.map((offer, index) => (
                                <Card
                                    fluid={centered}
                                    color={['blue', 'violet', 'purple'][index]}
                                    style={{ textAlign: 'center' }}>
                                    <Card.Content>
                                        <Statistic>
                                            <Statistic.Value text>{offer.type}</Statistic.Value>
                                            <Statistic.Label>{offer.size}</Statistic.Label>
                                        </Statistic>
                                        <Divider />
                                        {offer.single
                                            ? (
                                                <div>
                                                    <Statistic>
                                                        <Statistic.Value>{numeral(offer.single).format('$0.00')}</Statistic.Value>
                                                        <Statistic.Label>One lesson</Statistic.Label>
                                                    </Statistic>
                                                    <Divider />
                                                </div>
                                            )
                                            : shouldBeCollapsed()
                                                ? null
                                                : (
                                                    <div>
                                                        <Statistic>
                                                            <Statistic.Value>&nbsp;</Statistic.Value>
                                                            <Statistic.Label>&nbsp;</Statistic.Label>
                                                        </Statistic>
                                                        <Divider />
                                                    </div>
                                                )}
                                        <Statistic>
                                            <Statistic.Label>Best deal</Statistic.Label>
                                            <Statistic.Value>{numeral(offer.four).format('$0.00')}</Statistic.Value>
                                            <Statistic.Label>Four lessons</Statistic.Label>
                                        </Statistic>
                                    </Card.Content>
                                    <Message
                                        attached='bottom'
                                        inverse>
                                        <List>
                                            {offer.details.map(detail => <List.Item>{detail}</List.Item>)}
                                        </List>
                                    </Message>
                                </Card>
                            ))}
                        </Card.Group>
                        <Message negative>
                            <Message.Header>
                                <Icon name='info circle' /> Students who can’t attend scheduled class should call 24 hours before the class or they will be charged for a lesson.
                            </Message.Header>
                        </Message>
                    </Segment>
                    <Segment raised>
                        <Header as='h2'>
                            Our Instructors
                        </Header>
                        <p>Our top-notch instructors are more than just talented players -- they're experienced tutors who will form a bond with you and guide you on your path to table tennis glory.</p>
                        <Segment stacked fluid>
                            <Item.Group>
                                {instructors.map(instructor => (
                                    <Item style={{ marginBottom: '6rem' }}>
                                        <Item.Image
                                            src={instructor.image}
                                            size='small' />
                                        <Item.Content>
                                            <Item.Header>{instructor.name}</Item.Header>
                                            <Item.Meta>USATT Peak Rating: {instructor.rating}</Item.Meta>
                                            <Divider />
                                            <Item.Description>
                                                <Header as='h3'>Education</Header>
                                                <List bulleted>
                                                    {instructor.education.map(_education => <List.Item>{_education}</List.Item>)}
                                                </List>
                                            </Item.Description>
                                            <Divider />
                                            <Item.Description extra>
                                                <Header as='h3'>Table Tennis Background</Header>
                                                <List bulleted>
                                                    {instructor.background.map(_background => <List.Item>{_background}</List.Item>)}
                                                </List>
                                            </Item.Description>
                                            <Divider inverted />
                                        </Item.Content>
                                    </Item>
                                ))}
                            </Item.Group>
                        </Segment>
                    </Segment>
                </Container>
            </div>
        );
    }
}