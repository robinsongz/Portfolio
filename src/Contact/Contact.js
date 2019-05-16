import React from 'react';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Contact() {
  return (
   
    <div className='section-contact'>
        <div className='contact-title'>
            <h2 className='heading-secondary contact-heading' data-aos='slide-right' data-aos-once='true'>
                Contact
            </h2>
            <div className='border-bottom-contact' data-aos='slide-left' data-aos-once='true'></div>
        </div>

        <div className='social'>
            <a className='icon' data-aos='flip-left' data-aos-once='true' data-aos-delay='10' href='https://www.facebook.com/roblafunk?ref=bookmarks' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon className='asdf' icon={['fab', 'facebook']}  />
            </a>
            <a className='icon' data-aos='flip-left' data-aos-once='true' data-aos-delay='100' href='https://www.instagram.com/robinsongz/' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'instagram']} /> 
            </a>
            <a className='icon' data-aos='flip-left' data-aos-once='true' data-aos-delay='300' href='https://www.linkedin.com/in/robin-sung-839146a4/' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']}  /> 
            </a>
            <a className='icon' data-aos='flip-left' data-aos-once='true' data-aos-delay='400' href='https://github.com/robinsongz' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']}  /> 
            </a>
            
        </div>

        <div className='section-copyright'>
            <p className='section-copyright__text'> <span className='highlight'>robinsongz</span> Ⓒ2019</p> 
        </div>
    </div>
  );
}

export default Contact;
