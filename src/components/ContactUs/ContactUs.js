import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
            <h2 style={{textAlign:'center', fontWeight:'bold', color:'blue', marginBottom: '30px', fontSize:'45px'}}>Contact Us</h2>
            <div className="contact">
                <div className="form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="tel" placeholder="Password" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="info">
                    <div className="cont-info">
                        <div><h1></h1></div>
                        <div className="cont-single">
                            <h3>Location</h3>
                            <p>sector:06, road:08, house:14 uttara-1230</p>
                        </div>
                    </div>
                    <div className="cont-info">
                        <div><h1></h1></div>
                        <div className="cont-single">
                            <h3>Open hours:</h3>
                            <p>Sunday-Friday: 11:00am - 11:00pm</p>
                        </div>
                    </div>
                    <div className="cont-info">
                        <div><h1></h1></div>
                        <div className="cont-single">
                            <h3>Email:</h3>
                            <p>theroyelcoatching@gmail.com</p>
                        </div>
                    </div>
                    <div className="cont-info">
                        <div><h1></h1></div>
                        <div className="cont-single">
                            <h3>Call:</h3>
                            <p>+880 1777-990704</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;