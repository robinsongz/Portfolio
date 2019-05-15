import React, { Component } from 'react';
import './header.scss';
import ParticlesBackground from '../Particles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Header extends Component {

    render() {
        return (
            <div class='header'>
               <ParticlesBackground />
                   <div class='header__text-box'>
                       <h1 class='heading-primary'>
                           <div class='heading-primary--main'>
                               Hello, I'm <span class='highlight'>robinsongz</span>.
                               <br/>
                               I'm a full-stack web developer.
                           
                           </div>
                       </h1>
                   </div>
                   <div className="arrow bounce">
                       <FontAwesomeIcon icon='arrow-down' size='3x'/>
                   </div>
           </div>
         );
    }
 
}

export default Header;
