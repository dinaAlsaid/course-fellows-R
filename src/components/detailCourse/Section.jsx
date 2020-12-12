
import React, { useState, useEffect, useContext } from 'react'
import superagent from 'superagent';
import { RegisterContext } from '../../context/auth';
import { ListGroup, Image, Card, ProgressBar, ListGroupItem, Container, Row, Col } from 'react-bootstrap';
import VideoList from './videolist'
import { If, Then, Else } from 'react-if';

function Section(props) {
    let now = (props.course.time_watched / props.course.total_duration) * 100;

    console.log('prop', props.ispublic)
    // /:user/courses/:course'
    return (
        <>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={`${props.course.playlist.thumbnail}`} />
                <Card.Body>
                    <Card.Title>{props.course.playlist.playlist_title}</Card.Title>
                    <If condition={!props.ispublic}>
                        <Card.Text>
                            <ProgressBar now={now} className="mb-2" />
                            <Card.Text style={{ textAlign: 'center' }}> {now}% COMPLETE</Card.Text>
                        </Card.Text>

                    </If>

                </Card.Body>



                <ListGroup className="list-group-flush">

                    {props.course.sections.map((item) => {
                        // thumbnail
                        return (
                            <>

                                <ListGroupItem > <Card.Link href={`#${item.section_title}`}>{item.section_title}</Card.Link> </ListGroupItem>


                            </>
                        )
                    })
                    }
                </ListGroup>
            </Card>
        </>

    )
}
export default Section;