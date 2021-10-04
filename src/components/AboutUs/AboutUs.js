// import Button from '@restart/ui/esm/Button';
import React from 'react';
import image from '../../images/nepal-article-photo.jpg';

const AboutUs = () => {
    return (
        <div style={{margin:'30px'}}>
            <h2 style={{textAlign:'center', fontWeight:'bold', color:'blue', marginBottom: '30px', fontSize:'45px'}}>About Us</h2>
            <div style={{display:'flex'}}>
                <div style={{width:'50%', paddingRight:'15px'}}>
                    <h2 style={{textAlign:'center', fontWeight:'bold', color:'blue', marginBottom: '30px', fontSize:'45px'}}>Why Choose Us</h2>
                    <p style={{textAlign:'left'}}>The Royel Coatching is one of the latest IT technological based Coatching in Bangladesh where academic excellence is a tradition, teaching a passion and building career a habit. The Royel Coatching is sister concern of Real life Coatching Center. The Royel Coatching currently has more than 1000+ all kinds of undergraduate students and over 49 Experience faculties. The student population is projected to grow at 100% annually.</p>
                    <h5 style={{textAlign:'left', color:'magenta'}}>Separated they live</h5>
                    <h5 style={{textAlign:'left', color:'magenta'}}>Bookmarksgrove right at the coast</h5>
                    <h5 style={{textAlign:'left', color:'magenta'}}>large language ocean</h5>
                    <div style={{display:'flex', justifyContent:'space-around', margin:'20px'}}>
                        <div>
                            <h3 style={{fontSize:'30px', color:'blue', fontWeight:'bold'}}>4000</h3>
                            <p>Students</p>
                        </div>
                        <div>
                            <h3 style={{fontSize:'30px', color:'blue', fontWeight:'bold'}}>49</h3>
                            <p>Teachers</p> 
                        </div>
                        <div>
                            <h3 style={{fontSize:'30px', color:'blue', fontWeight:'bold'}}>12</h3>
                            <p>Awards</p>
                        </div>
                    </div>
                    <div>
                        <button style={{padding:"5px 15px", borderRadius:"5px", fontSize:"20px", border:"0", marginRight:"10px", backgroundColor:"purple", color:"white", fontWeight:"bolder"}}>Addmission</button>
                        <button style={{padding:"5px 15px", borderRadius:"5px", fontSize:"20px", border:"0", backgroundColor:"purple", color:"white", fontWeight:"bolder"}}>Learn More</button>
                    </div>
                </div>
                <div style={{width:'50%', paddingLeft:'15px'}}>
                    <img style={{width:'100%', borderRadius:'10px'}} src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;