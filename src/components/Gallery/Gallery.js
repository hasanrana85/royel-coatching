import React from 'react';
import './Gallery.css';
import image1 from '../../images/nepal-article-photo.jpg';
import image2 from '../../images/images.jpg';
import image3 from '../../images/SSC-Syllabus.jpg';
import image4 from '../../images/electrical.jpg';
import image5 from '../../images/computer.jpg';
import image6 from '../../images/math.jpg';

const Gallery = () => {
    return (
        <div>
            <h2 style={{textAlign:'center', fontWeight:'bold', color:'blue', marginBottom: '30px', fontSize:'45px'}}>Gallery</h2>
            <div>
                <div className="gallery">
                <div><img style={{width:'400px', height:'400px', margin:'10px', borderRadius:'20px'}} src={image1} alt="" /></div>
                <div><img style={{width:'400px', height:'400px', margin:'10px', borderRadius:'20px'}} src={image2} alt="" /></div>
                <div><img style={{width:'400px', height:'400px', margin:'10px', borderRadius:'20px'}} src={image3} alt="" /></div>
            </div>
            <div className="gallery">
                <div><img style={{width:'400px', height:'400px', margin:'10px', borderRadius:'20px'}} src={image4} alt="" /></div>
                <div><img style={{width:'400px', height:'400px', margin:'10px', borderRadius:'20px'}} src={image5} alt="" /></div>
                <div><img style={{width:'400px', height:'400px', margin:'10px', borderRadius:'20px'}} src={image6} alt="" /></div>
            </div>
            </div>
        </div>
    );
};

export default Gallery;