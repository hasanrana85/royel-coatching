import React from 'react';
import './Footer.css';
import image1 from '../../images/nepal-article-photo.jpg';
import image2 from '../../images/images.jpg';
import image3 from '../../images/SSC-Syllabus.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />
    const yotube = <FontAwesomeIcon icon={faYoutube} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />
    return (
        <div className="footer">
            <div className="footer-main">
                <div className="single-div">
                    <h4 className="footer-header">About The Royal Coatching</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p>{facebook} <span>{twitter}</span> <span>{linkedin}</span> <span>{yotube}</span> <span>{instagram}</span> <span>{whatsapp}</span> </p>

                </div>
                <div className="single-div">
                    <h4 className="footer-header">Batches</h4>
                    <p>Class-1 to Class-5</p>
                    <p>Class-6 to Class-8</p>
                    <p>Class-9 to Class-10</p>
                    <p>Class-12</p>
                </div>
                <div className="single-div">
                    <h4 className="footer-header">Gallery</h4>
                    <div className="gallery">
                        <div><img style={{width:'100px', height:'60px', margin:'10px', borderRadius:'20px'}} src={image1} alt="" /></div>
                        <div><img style={{width:'100px', height:'60px', margin:'10px', borderRadius:'20px'}} src={image2} alt="" /></div>
                        <div><img style={{width:'100px', height:'60px', margin:'10px', borderRadius:'20px'}} src={image3} alt="" /></div>
                    </div>
                    <div className="gallery">
                        <div><img style={{width:'100px', height:'60px', margin:'10px', borderRadius:'20px'}} src={image1} alt="" /></div>
                        <div><img style={{width:'100px', height:'60px', margin:'10px', borderRadius:'20px'}} src={image2} alt="" /></div>
                        <div><img style={{width:'100px', height:'60px', margin:'10px', borderRadius:'20px'}} src={image3} alt="" /></div>
                    </div>
                </div>
                <div className="single-div">
                    <h4 className="footer-header">Contact Us</h4>
                    <p>sector:06, road:08, house:14 uttara-1230</p>
                    <p>email: theroyelcoatching@gmail.com</p>
                    <p>call: +880 1777-990704</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;