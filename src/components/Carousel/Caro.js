import React from 'react';
import { CarouselItem, Carousel } from 'react-bootstrap';
import logo from '../../images/images.jpg';
import logo1 from '../../images/nepal-article-photo.jpg';
import logo2 from '../../images/slider-2.jpg';
import logo3 from '../../images/SSC-Syllabus.jpg';

const Caro = () => {
    return (
        <div style={{ backgroundColor:"black" }}>
            <Carousel>
            <Carousel.Item interval={1000}>
                <img
                style={{ display:'block', width:"100%", height:"400px"}}
                src={ logo }
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={{color:"red", fontWeight:"bolder"}}>No Nation can prosper in life without Education</h3>
                <p style={{color:"red", fontWeight:"bolder"}}>Education is essential for a student because after being educated enough, a student will be able to select a good career option for them.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                style={{ display:'block', width:"100%", height:"400px"}}
                src={ logo1 }
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3 style={{color:"red", fontWeight:"bolder"}}>We ensure better education for a better world</h3>
                <p style={{color:"red", fontWeight:"bolder"}}>English has made it possible to connect with people around the globe. No matter what their mother tongue is, English has become a primary </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{ display:'block', width:"100%", height:"400px"}}
                src={ logo3 }
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 style={{color:"red", fontWeight:"bolder"}}>Making your childs world better</h3>
                <p style={{color:"red", fontWeight:"bolder"}}>Technology is playing an increasing role in education. As technology advances, it is used to benefit students of all ages in the learning process. Technology used in the classroom helps students adsorb the material. ... As technology advances,</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Caro;