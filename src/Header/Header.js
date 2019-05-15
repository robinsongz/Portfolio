import React, { Component } from 'react';
import './header.scss';
import ParticlesBackground from '../Particles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Header extends Component {

    render() {
        return (
            <div className='header'>
               <ParticlesBackground />
                   <div className='header__text-box'>
                       <h1 className='heading-primary'>
                           <div className='heading-primary--main'>
                               Hello, I'm <span className='highlight'>robinsongz</span>.
                               <br/>
                               I'm a full-stack web developer.
                            <div className="arrow bounce">
                                <FontAwesomeIcon icon='arrow-down' size='1x'/>
                            </div>
                           </div>
                       </h1>
                   </div>
                   
           </div>
         );
    }
 
}

export default Header;
