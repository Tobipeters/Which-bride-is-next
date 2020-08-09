import React from 'react';
import './Blog.css'
import { Row, Col, Card, Container } from 'react-bootstrap';
import Unveil from '../../assests/unveil.png'
import No from '../../assests/she-said-no.png'
import Chef from '../../assests/chef.png'

const Blog = () => {
    return (
        <div className="blog-cont pt-4 pd-4 pr-2 pl-2">
            <h3 className="sub-title">Blog</h3>
            <Container>
            <Row className="pt-2 pb-2 pr-3 pl-3 justify-content-center">
                <Col  md={4} sm={12} xs={12}>
                    <Card className="mb-md-3">
                        <Card.Img variant="top" src={Unveil} />
                        <Card.Body>
                            <Card.Title>How to marry a Nigerian</Card.Title>
                            <Card.Text>
                            I was so excited about my forthcoming wedding and just like...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> 
                <Col  md={4} sm={12} xs={12}>
                    <Card className="mb-md-3">
                        <Card.Img variant="top" src={Chef} />
                        <Card.Body>
                            <Card.Title>Hiring a Badass Chef</Card.Title>
                            <Card.Text>
                            I was so excited about my forthcoming wedding and just like...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>  
                <Col  md={4} sm={12} xs={12}>
                    <Card className="mb-md-3">
                        <Card.Img variant="top" src={No} />
                        <Card.Body>
                            <Card.Title>She said No</Card.Title>
                            <Card.Text>
                            I was so excited about my forthcoming wedding and just like...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>   
            </Row>
            <button className="btn btn-cont d-block mx-auto my-5">More Article</button>
            </Container>
        </div>

    );
}

export default Blog;