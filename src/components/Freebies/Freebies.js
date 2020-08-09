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

//Implementing React Multiple carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//icon names
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


class Freebies extends React.Component {
    constructor() {
        super()

        this.state = {

        }

        this.funcLeftArrow = this.funcLeftArrow.bind(this)
        this.funcRightArrow = this.funcRightArrow.bind(this)
    }

    funcLeftArrow(){
        return(
            <div className="left-arr-cont">
            <FaAngleLeft className="left-arr-cont" />
            </div>
        )
    }

    funcRightArrow(){
        return(
            <div className="right-arr-cont">
            <FaAngleRight className="right-arr-cont" />
            </div>
        )
    }

    render() {

        const leftArrow= this.funcLeftArrow()
        const rightArrow = this.funcRightArrow


        return (
            <div className="freebies-cont">
                <Container>
                    <div className="pt-3 pb-3 header-cont">
                        <h3 className="sub-title d-inline text-left pt-1 pb-1">Exclusive Freebies</h3>
                        <button className="btn btn-cont float-right mt-3">View All</button>
                    </div>
                    {/* <Row className="pt-4 pb-5 row-card-1"> */}

                    <Carousel
                        className="pt-4 pb-5 row-card-1"
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={3000}
                        additionalTransfrom={0}
                        focusOnSelect={true}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        minimumTouchDrag={80}
                    >

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
                    </Carousel>


                    <div className="pt-3 pb-3 header-cont">
                        <h3 className="sub-title d-inline text-left pt-1 pb-1">Directed Deals</h3>
                        <button className="btn btn-cont float-right mt-3">View All</button>
                    </div>

                    <Carousel
                        className="pt-4 pb-5 row-card-1"
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        additionalTransfrom={0}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        minimumTouchDrag={80}
                    >
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
                        <Card className="freebies-card-2">
                            <Card.Img variant="top" src={WedRing} />
                            <span className="card-tag">20%</span>
                            <Card.Body>
                                <Card.Title className="mb-0">Wedding Ringt</Card.Title>
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
                    </Carousel>

                </Container>
            </div>
        );
    }

}

export default Freebies;