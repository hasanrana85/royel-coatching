import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('./fakedb.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return (
        <div style={{padding:'30px'}}>
            <h2 style={{textAlign:'center', fontWeight:'bold', color:'blue', marginBottom: '30px', fontSize:'45px'}}>Our Services</h2>
            <Row xs={1} md={2} className="g-4">
                {
                    services.map(service => <Service 
                    key = {service.code}
                    service = {service}
                    ></Service>)
                }
            </Row>
            
        </div>
    );
};

export default Services;
