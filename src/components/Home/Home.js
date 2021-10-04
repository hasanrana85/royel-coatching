import React, {useEffect, useState} from 'react';
import { Card, Col, Row } from 'react-bootstrap';
// import Services from '../Services/Services';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./fakedb.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return (
        // <div>
        //     {/* <Services></Services> */}
        // </div>
        <div style={{padding:'30px'}}>
            <h2 style={{textAlign:'center', fontWeight:'bold', color:'blue', marginBottom: '30px', fontSize:'45px'}}>Our Services</h2>
            <Row xs={1} md={2} className="g-4">
                {
                    services.slice(0,4).map(service => <Col>
                <Card>
                    <Card.Img variant="top" style={{width:'100%', height: '300px'}} src={service.image} />
                    <Card.Body>
                    <Card.Title>{service.title}<br/>
                    <span>Code: {service.code}</span><br/>
                    <span>Course Fee: {service.courseFee}</span></Card.Title>
                    <Card.Text>
                        
                        {service.details}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col> )
                }
            </Row>
            
        </div>
    );
};

export default Home;