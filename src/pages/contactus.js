import React from 'react';
import RugbyBall from '../static/images/rugbyBall.png';
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa';
import '../styles/contactus.scss';


const ContactUs = () => {
  return (
    <div className='contactus-main-wrapper'>  
      <div className='left-pane-wrapper'>
          <div className='left-column-img'>
            <img src={RugbyBall} alt='rugbyball' />
          </div>
      </div>
    
      <div className='contact-icon-info-wrapper'>
        <div className='right-pane-wrapper'>
          <div className='icons-group'>
            <h3><FaMapMarkedAlt /></h3>   
          </div>

          <div className="info">
            <p>The Rugby Shop | 123 Anywhere Street | Salt Lake City, Utah 84000</p>
          </div> 
          
          <div className='icons-group'>
            <h3><FaEnvelope /></h3> 
          </div>

          <div className="info">
            <p>customerservice@test.com</p>
          </div>

          <div className='icons-group'>
            <h3><FaPhoneAlt/></h3>
          </div>

          <div className="info">
            <p>801-555-5258</p>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default ContactUs