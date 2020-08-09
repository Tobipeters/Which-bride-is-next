import React from 'react';
import './Review.css'
import PinkBg from '../../assests/pink-bg.png'
import Banner from '../../assests/ad-banner.png'
import CardTagT from '../../assests/card-tag-t.png'
import CardTagB from '../../assests/card-tag-b.png'
import Coke from '../../assests/coke.png'
import Dstv from '../../assests/dstv.png'
import Tara from '../../assests/tara.png'
import Union from '../../assests/union.png'
import Cool from '../../assests/cool.png'
import Nestle from '../../assests/nestle.png'
import Daystar from '../../assests/daystar.png'
import Bella from '../../assests/bella.png'
import Soundcity from '../../assests/soundcity.png'

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

import { Container, Card, Row, Col } from 'react-bootstrap';

const Review = () => {
    return (
        <div>
            <section className="py-5" style={{ backgroundImage: `url(${PinkBg})` }}>
                <h3 className="sub-title" >Reviews</h3>
                <Container>

                    <Card className="review-card text-center mx-4">
                        {/* <img className="c-img-1" src={CardTagT} /> */}
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                         </Card.Text>
                        </Card.Body>
                        {/* <img className="c-img-2" src={CardTagB} /> */}
                    </Card>
                </Container>
            </section>
            <img className="banner" src={Banner} />

            {/* Oor partner section */}

            <section>
                <Container>
                    <Row>
                        <Col md={6} lg={6} xs={12}>
                            <h3 className="sub-title">Our Partners</h3>
                            <p>These are our current season's partners ranging from sponsors, A list/celebrity vendors, Radio and Tv stations, online platforms and other media houses.</p>
                        </Col>
                        <Col md={6} lg={6} xs={12}>
                            <Row className="justify-content-center py-5">
                                <Col className="mb-md-2" md={4} xs={6}>
                                    <img src={Coke} />
                                </Col>
                                <Col className="mb-md-2" md={4} xs={6}>
                                    <img src={Dstv} />
                                </Col>
                                <Col className="mb-md-2" md={4} xs={6}>
                                    <img src={Tara} />
                                </Col>
                                <Col className="mb-md-2" md={4} xs={6}>
                                    <img src={Union} />
                                </Col>
                                <Col className="mb-md-2" md={4} xs={6}>
                                    <img src={Cool} />
                                </Col>
                                <Col className="mb-md-2" md={4} xs={6}>
                                    <img src={Nestle} />
                                </Col>
                                <Col className="mb-md-2" md={4} xs={6}>
                                    <img src={Daystar} />
                                </Col>
                                <Col className="mb-md-2" md={4} xs={6}>
                                    <img src={Bella} />
                                </Col>
                                <Col className="mb-md-2 " md={4} xs={6}>
                                    <img src={Soundcity} />
                                </Col>

                            </Row>

                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Connect on social media */}
            <section>
                <Container>
                    <Row>
                        <Col md={6} xs={12} className="mb-xs-3 pr-md-0">
                            <div className="px-2 py-3 soc-media">
                                <span>
                                    Connect with us!
                                </span>
                                <span className="float-right">
                                    <div className="icon-cont d-inline mx-1">
                                        <FaFacebookF  />
                                    </div>
                                    <div className="icon-cont d-inline mx-1">
                                        <FaTwitter />
                                    </div>
                                    <div className="icon-cont d-inline mx-1">
                                        <FaInstagram  />
                                    </div>

                                </span>
                            </div>
                        </Col>
                        <Col md={6} xs={12} className=" pl-md-0">
                        <div className="px-2 py-3 soc-media">
                                <span>
                                    Want to help us to improve?
                                </span>
                                <button className="btn btn-cont float-right">
                                Take a Survey
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Review;