import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import SectionBackground from '../../assests/show-section-bg.png'
import ShowBanner from '../../assests/freebie-banner.png'
import ButtonIcon from '../../assests/btn-icon.png'
import './ShowSection.css'

class ShowSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="show-sect-container" style={{ backgroundImage: `url(${SectionBackground})` }}>
                <Container fluid>
                    <img class="img-fluid" src={ShowBanner} />

                    <div className="video-sect-container">
                        <h3 className="sub-title">Catch Up!</h3>
                        <Row>
                            <Col xs="12" sm="12" md="6" lg="6">
                                <video controls autoplay>
                                    <source src="movie.mp4" type="video/mp4" />
                                    <source src="movie.ogg" type="video/ogg" />
                                </video>
                            </Col>
                            <Col xs="12" sm="12" md="6" lg="6">
                                <video controls autoplay>
                                    <source src="movie.mp4" type="video/mp4" />
                                    <source src="movie.ogg" type="video/ogg" />
                                </video>
                            </Col>
                            <Col xs="12" sm="12" md="6" lg="6">
                                <video controls autoplay>
                                    <source src="movie.mp4" type="video/mp4" />
                                    <source src="movie.ogg" type="video/ogg" />
                                </video>
                            </Col>
                            <Col xs="12" sm="12" md="6" lg="6">
                                <video controls autoplay>
                                    <source src="movie.mp4" type="video/mp4" />
                                    <source src="movie.ogg" type="video/ogg" />
                                </video>
                            </Col>
                        </Row>
                          
                        <button className="btn btn-cont mt-3 mb-5 d-block m-auto">SEE THE SHOWS</button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default ShowSection;