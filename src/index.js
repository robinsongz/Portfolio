import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faLinkedin, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';

library.add(faArrowDown, faInstagram, faFacebook, faLinkedin, faGithub, faDiscord)

ReactDOM.render(<App />, document.getElementById('root'));
