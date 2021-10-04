import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {title, image, code, courseFee, details} = props.service;
    return (
            <Col>
                <Card>
                    <Card.Img variant="top" style={{width:'100%', height: '300px'}} src={image} />
                    <Card.Body>
                    <Card.Title>{title}<br/>
                    <span>Code: {code}</span><br/>
                    <span>Course Fee: {courseFee}</span></Card.Title>
                    <Card.Text>
                        
                        {details}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
    );
};

export default Service;
