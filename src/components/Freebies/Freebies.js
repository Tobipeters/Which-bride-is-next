import React from 'react';
import './Freebies.css'
import { Container, Row, Card, Col, Button } from 'react-bootstrap';
import Gown from '../../assests/gown.png'
import MakeUp from '../../assests/makeup.png'
import Facials from '../../assests/facials.png'


const Freebies = () => {
    return (
        <div>
            <Container>
                <div className="pt-3 pb-3 header-cont">
                    <h3 className="sub-title d-inline text-left pt-1 pb-1">Exclusive Freebies</h3>
                    <button className="btn btn-cont float-right mt-3">View All</button>
                </div>
                <Row className="pt-2 pb-5">
                    <Col sm={12} md={4} lg={3}>
                        <Card className="freebies-card-1">
                            <Card.Img variant="top" src={Gown} />
                            <Card.Body>
                                <Card.Title>Free Gown</Card.Title>
                                <Card.Text>
                                    <span>  By: Facelift Spa</span>
                                    <br />
                                    <span>Get offer</span>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4} lg={3}>
                        <Card className="freebies-card-1">
                            <Card.Img variant="top" src={Facials} />
                            <Card.Body>
                                <Card.Title>Facials</Card.Title>
                                <Card.Text>
                                    <span>  By: Facelift Spa</span>
                                    <br />
                                    <span>Get offer</span>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4} lg={3}>
                        <Card className="freebies-card-1">
                            <Card.Img variant="top" src={MakeUp} />
                            <Card.Body>
                                <Card.Title>Make up</Card.Title>
                                <Card.Text>
                                    <span>  By: Facelift Spa</span>
                                    <br />
                                    <span>Get offer</span>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                
                <div className="pt-3 pb-3 header-cont">
                    <h3 className="sub-title d-inline text-left pt-1 pb-1">Directed Deals</h3>
                    <button className="btn btn-cont float-right mt-3">View All</button>
                </div>
                <Row>
                    <Col sm={12} md={4} lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Freebies;