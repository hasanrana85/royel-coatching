import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/cropped-favicon.png';
import Button from '@restart/ui/esm/Button';
import { Link, NavLink } from 'react-router-dom';
import Caro from '../Carousel/Caro';

const Header = () => {

    return (
        <div style={{marginBottom:'30px'}}>
            <div className="menu">
            <div className="logo-image">
                <img src={logo} alt="" />
                <div style={{ marginLeft:'10px'}}>
                    <h2>The Royel Coatching</h2>
                </div>
            </div>
            <div>
                <ul>
                    <li><NavLink to="/home"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                        textDecoration: "none",
                        padding:"5px",
                        borderRadius:"5px",
                        backgroundColor:"black"
                    }}>Home</NavLink>
                    </li>
                    <li><NavLink to="/services"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                        textDecoration: "none",
                        padding:"5px",
                        borderRadius:"5px",
                        backgroundColor:"black"
                    }}>Services</NavLink>
                    </li>
                    <li><NavLink to="/about"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                        textDecoration: "none",
                        padding:"5px",
                        borderRadius:"5px",
                        backgroundColor:"black"
                    }}>About Us</NavLink>
                    </li>
                    <li><NavLink to="/contact"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                        textDecoration: "none",
                        padding:"5px",
                        borderRadius:"5px",
                        backgroundColor:"black"
                    }}>Contact Us</NavLink>
                    </li>
                    <li><NavLink to="/gallery"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                        textDecoration: "none",
                        padding:"5px",
                        borderRadius:"5px",
                        backgroundColor:"black"
                    }}>Gallery</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <Button variant="primary">Login</Button>{' '}
                <Button variant="secondary">Registration</Button>{' '}
            </div>
        </div>
        <div>
            <Caro></Caro>
        </div>
        </div>
        
        
        
    );
};

export default Header;