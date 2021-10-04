import Button from '@restart/ui/esm/Button';
import React from 'react';
import image from '../../images/nepal-article-photo.jpg';

const AboutUs = () => {
    return (
        <div style={{margin:'30px'}}>
            <h2 style={{textAlign:'center', fontWeight:'bold', color:'blue', marginBottom: '30px', fontSize:'45px'}}>About Us</h2>
            <div style={{display:'flex'}}>
                <div style={{width:'50%', paddingRight:'15px'}}>
                    <h2 style={{textAlign:'center', fontWeight:'bold', color:'blue', marginBottom: '30px', fontSize:'45px'}}>Why Choose Us</h2>
                    <p style={{textAlign:'left'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
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
                        <Button variant="primary">Addmission</Button>{' '}
                        <Button variant="warning">Learn More</Button>{' '}
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