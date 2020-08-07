import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import SectionBackground from '../../assests/show-section-bg.png'
import ShowBanner from '../../assests/show-banner.png'
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
                    <Row className="show-banner" style={{ backgroundImage: `url(${ShowBanner})` }}>
                        <div>
                            <span>
                                New Items up for grabs today! Check the Freebies section to see them!
                        </span>
                            <button>
                                View freebies
                        </button>
                        </div>
                    </Row>
                    <div className="video-sect-container">
                        <h3>Catch Up!</h3>
                        <Row>
                            <Col xs="12" sm="12" md="6" lg="6">

                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default ShowSection;