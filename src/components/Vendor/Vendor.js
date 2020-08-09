import React from 'react';
import { Row, Container, Card } from 'react-bootstrap';
import VendorBg from '../../assests/vendor.png'
import VendorTag from '../../assests/ven-tag.png'
import VenOne from '../../assests/ven-1.png'
import VenTwo from '../../assests/ven-2.png'
import VenThree from '../../assests/ven-3.png'
import VenFour from '../../assests/ven-4.png'
import VenFive from '../../assests/ven-5.png'
import './Vendor.css'

const Vendor = () => {
    return (
        <div className="vendor-cont pt-3 pb-5" style={{ backgroundImage: `url(${VendorBg})` }}>
            <img className="img-1" src={VendorTag} />
            <h3 className="sub-title">Most sort after vendors</h3>
            <Container>
                <Row className="justify-content-center">
                    <img className="m-3" src={VenOne} />
                    <img className="m-3" src={VenTwo} />
                    <img className="m-3" src={VenThree} />
                    <img className="m-3" src={VenFour} />
                    <img className="m-3" src={VenFive} />
                </Row>
                <button className="btn btn-cont d-block mx-auto my-3"> All vendors</button>
            </Container>
            <img className="img-2" src={VendorTag} />
        </div>
    );
}

export default Vendor;