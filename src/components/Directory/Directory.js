import React, { useState } from 'react';
import './Directory.css'
import DirectoryBackground from '../../assests/directory-bg.png'
import { Row, Card, Image, ListGroup, Container, Col } from 'react-bootstrap'
import Flower from '../../assests/dir-flower.png'
import Gift from '../../assests/dir-gift.png'
import Necklace from '../../assests/dir-necklace.png'
import Wine from '../../assests/dir-wine.png'
import Dress from '../../assests/dir-dress.png'
import Participate from '../../assests/participate.png'
import ApplyNow from '../../assests/apply-now.png'
import Ring from '../../assests/ring.png'
import BottomFlower from '../../assests/bottom-flower.png'
import HowTo from '../../assests/how-to-bg.png'



const Directory = () => {


    return (
        <section className="main-dir" style={{ backgroundImage: `url(${DirectoryBackground})` }}>
            <div>
                <h3 className="sub-title">Our Directory</h3>
                <p className="dir-text">
                    With a wide range collection of vendors, products, gifts and full flexibility. We are here to help you create a memorable wedding!
            </p>
            </div>

            <Row className="justify-content-around dir-card-row">
                <Card className="dir-icon-card">
                    <Card.Body>
                        <Card.Text>
                            <Image src={Flower} className="img-fluid d-block m-auto" />
                            <p className="text-center">Flower</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="dir-icon-card">
                    <Card.Body>
                        <Card.Text>
                            <Image src={Gift} className="img-fluid d-block m-auto" />
                            <p className="text-center">Gift Items</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="dir-icon-card">
                    <Card.Body>
                        <Card.Text>
                            <Image src={Necklace} className="img-fluid d-block m-auto" />
                            <p className="text-center">Jeweleries</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="dir-icon-card">
                    <Card.Body>
                        <Card.Text>
                            <Image src={Wine} className="img-fluid d-block m-auto" />
                            <p className="text-center">Wine</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="dir-icon-card">
                    <Card.Body>
                        <Card.Text>
                            <Image src={Dress} className="img-fluid d-block m-auto" />
                            <p className="text-center">Dress</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>

            <div className="d-flex justify-content-center pt-3 pb-5">

                <button className="btn btn-cont mr-3">Get Discount</button>
                <button className="btn btn-cont">See Directory</button>

            </div>

            <div className="participate-cont" style={{ backgroundImage: `url(${Participate})` }}>
                <div >
                    <Card className="apply-now" style={{ backgroundImage: `url(${ApplyNow})` }}>
                        <Image src={Ring} />
                        <ListGroup horizontal>
                            <ListGroup.Item>
                                <h3>1000+</h3>
                                <small> Unlimited Applicants </small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3>12</h3>
                                <small>Lucky Seasons</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3>12</h3>
                                <small>Outstanding Weddings</small>
                            </ListGroup.Item>
                        </ListGroup>
                        <button className="btn btn-cont d-block m-auto">Apply Now</button>
                    </Card>

                </div>
                <div className="participate-text d-block float-right">
                    <h3> Do you have what it takes?</h3>
                    <p>
                        These Ladies got their Dream weddings all expense paid. What have you got to lose? Put your face on it!!!
                    </p>
                </div>
            </div>
            <section className="flower-bottom" style={{ backgroundImage: `url(${BottomFlower}), url(${HowTo})` }}>
                <Container>
                    <Row>
                        <Col md={6} sm={12}>
                            <div>
                                <h3 className="sub-title">How to Participate</h3>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                        </Col>
                    </Row>
                </Container>
            </section>
        </section>
    );
}

export default Directory;