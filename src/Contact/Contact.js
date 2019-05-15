import React from 'react';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
  return (
   
    <div className='section-contact'>
        <div className='contact-title'>
            <h2 className='heading-secondary contact-heading'>
                Contact
            </h2>
            <div className='border-bottom-contact'></div>
        </div>

        <div className='social'>
            <a className='icon' href='https://www.facebook.com/roblafunk?ref=bookmarks' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'facebook']} size='5x' />
            </a>
            <a className='icon' href='https://www.instagram.com/robinsongz/' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'instagram']} size='5x' /> 
            </a>
            <a className='icon' href='https://www.linkedin.com/in/robin-sung-839146a4/' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size='5x' /> 
            </a>
            <a className='icon' href='https://github.com/robinsongz' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']} size='5x' /> 
            </a>
            
        </div>
    </div>
  );
}

export default Contact;
