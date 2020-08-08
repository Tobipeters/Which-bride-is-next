import React from 'react';
import './Freebies.css'
import { Container, Row, Card, Col, Button } from 'react-bootstrap';
import Gown from '../../assests/gown.png'
import MakeUp from '../../assests/makeup.png'
import Facials from '../../assests/facials.png'
import Juicy from '../../assests/juicy.png'
import WedRing from '../../assests/wed-ring.png'
import Shirt from '../../assests/shirt.png'
import Unveil from '../../assests/unveil.png'


const Freebies = () => {
    return (
        <div>
            <Container>
                <div className="pt-3 pb-3 header-cont">
                    <h3 className="sub-title d-inline text-left pt-1 pb-1">Exclusive Freebies</h3>
                    <button className="btn btn-cont float-right mt-3">View All</button>
                </div>
                <Row className="pt-4 pb-5 row-card-1">
                    <Col sm={12} md={4} lg={3}>
                        <Card className="freebies-card-1">
                            <span className="card-tag">Free</span>
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
                            <span className="card-tag">Free</span>
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
                            <span className="card-tag">Free</span>
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
                <Row className="pt-4 pb-5 row-card-2">
                    <Col sm={12} md={4} lg={3}>
                        <Card className="freebies-card-2">
                            <Card.Img variant="top" src={Juicy} />
                            <span className="card-tag">20%</span>
                            <Card.Body>
                                <Card.Title className="mb-0">Wedding Juice</Card.Title>
                                <Card.Text>
                                    <span>  By: Facelift Spa</span>
                                    
                                    <div className="p-2 mt-2 mb-2 price-cont">
                                    <span className="pr-3">N55,000</span>
                                    <small><del>N75,000</del></small>
                                    </div>
                                    <span>Get offer</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4} lg={3}>
                        <Card className="freebies-card-2">
                            <Card.Img variant="top" src={Unveil} />
                            <span className="card-tag">20%</span>
                            <Card.Body>
                                <Card.Title className="mb-0">Wedding Ring</Card.Title>
                                <Card.Text>
                                    <span>  By: Facelift Spa</span>
                                    
                                    <div className="p-2 mt-2 mb-2 price-cont">
                                    <span className="pr-3">N55,000</span>
                                    <small><del>N75,000</del></small>
                                    </div>
                                    <span>Get offer</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4} lg={3}>
                        <Card className="freebies-card-2">
                            <Card.Img variant="top" src={Shirt} />
                            <span className="card-tag">20%</span>
                            <Card.Body>
                                <Card.Title className="mb-0">Wedding Shirt</Card.Title>
                                <Card.Text>
                                    <span>  By: Facelift Spa</span>
                                    
                                    <div className="p-2 mt-2 mb-2 price-cont">
                                    <span className="pr-3">N55,000</span>
                                    <small><del>N75,000</del></small>
                                    </div>
                                    <span>Get offer</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Freebies;