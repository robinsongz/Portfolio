import React, { Component } from 'react';
import './portfolio.scss';
import Modal from 'react-modal';

Modal.setAppElement('#root')  

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen1: false,
            modalIsOpen2: false,
            modelIsOpen3: false,
        };

        this.openModal1 = this.openModal1.bind(this);
        this.closeModal1 = this.closeModal1.bind(this);
        this.openModal2 = this.openModal2.bind(this);
        this.closeModal2 = this.closeModal2.bind(this);
        this.openModal3 = this.openModal3.bind(this);
        this.closeModal3 = this.closeModal3.bind(this);
    }


    openModal1() {
        this.setState({modalIsOpen1: true});
    }
    
    closeModal1() {
        this.setState({modalIsOpen1: false});
    }
    openModal2() {
        this.setState({modalIsOpen2: true});
    }
    
    closeModal2() {
        this.setState({modalIsOpen2: false});
    }
    openModal3() {
        this.setState({modalIsOpen3: true});
    }
    
    closeModal3() {
        this.setState({modalIsOpen3: false});
    }

    render() {
        return (
   
            <div className='section-portfolio' id='second'>
                <div className='portfolio-title'>
                    <h2 className='heading-secondary'>
                        Projects
                    </h2>
                    <div className='border-bottom'></div>
                </div>
        
                <div className='portfolio-body'>
                    <div className='portfolio-items'>
                        
                        <div class='portfolio-items-image'>
                            <img alt='slime' src={require('./king_slime_solo.png')} />
                        <div class='portfolio-items-caption'>
                            Slime Bot
                        <div class='caption-description'>
                            React.js + Sass + Node.js + Discord.js
                        </div>

                        <button 
                            className='caption-button'
                            onClick={this.openModal1}>
                            Learn More
                        </button>
                        <Modal 
                            isOpen={this.state.modalIsOpen1}
                            onRequestClose={this.closeModal1}
                            contentLabel="Slime Bot"
                            className='modal'
                            overlayClassName='overlay'
                            closeTimeoutMS={300}
                            >   
                            <div className='modal-title heading-secondary'>Slimebot.org</div>
                            
                            <div className='modal-description'>Slime Bot is a discord app for the mobile game Maplestory M. It's built on Node using Discord.js. Website is hosted on Netlify and built using React.js.</div>
                            <div className='modal-bottom'>
                                <a href='http://www.slimebot.org' target='_blank' rel='noopener noreferrer' className='caption-button view-button'>View Site</a> 
                                <button className='x-button' onClick={this.closeModal1}> X </button>
                            </div>
                            
                                            
                        </Modal>
                    </div>
                </div>
                        
                       
                    </div>
                    <div class='portfolio-items'>
                       
                        <div class='portfolio-items-image'>
                        <img alt='sandalboyz' src={require('./sandalboyz-logo.png')} />
                        <div class='portfolio-items-caption'>
                        Sandalboyz
                        <div class='caption-description'>
                        React.js + API + Emotion
                        </div>
                        <button 
                            className='caption-button'
                            onClick={this.openModal2}>
                            Learn More
                        </button>
                        <Modal 
                            isOpen={this.state.modalIsOpen2}
                            onRequestClose={this.closeModal2}
                            contentLabel="Sandalboyz"
                            className='modal'
                            overlayClassName='overlay'
                            closeTimeoutMS={300}
                            >   
                            <div className='modal-title heading-secondary'>Sandalboyz.com</div>
                            
                            <div className='modal-description'>SANDALBOYZ is a movement and lifestyle, existing to bridge the gap between sophistication and comfort. Currently working on new website using React.js, GraphQL, Gatsby, Apollo, Emotion.</div>
                            <div className='modal-bottom'>
                                <a href='http://www.sandalboyz.com' target='_blank' rel='noopener noreferrer' className='caption-button view-button'>View Site</a> 
                                <button className='x-button' onClick={this.closeModal2}> X </button>
                            </div>
                            
                                            
                        </Modal>
                        </div>
                        </div>
                    </div>
                    <div class='portfolio-items'>
                        
                        <div class='portfolio-items-image'>
                        <img alt='msm calc' src={require('./maplestory-256x256.png')} />
                        <div class='portfolio-items-caption'>
                        MSM Calculator
                        <div class='caption-description'>
                        React.js
                        </div>
                        <button 
                            className='caption-button'
                            onClick={this.openModal3}>
                            Learn More
                        </button>
                        <Modal 
                            isOpen={this.state.modalIsOpen3}
                            onRequestClose={this.closeModal3}
                            contentLabel="Sandalboyz"
                            className='modal'
                            overlayClassName='overlay'
                            closeTimeoutMS={300}
                            >   
                            <div className='modal-title heading-secondary'>MSM Calculator</div>
                            
                            <div className='modal-description'>MSM Calc is a damage calculator made for the mobile app Maplestory M. Made with React.js.</div>
                            <div className='modal-bottom'>
                                <a href='https://robinsongz.github.io/maplestorymcalc/' target='_blank' rel='noopener noreferrer' className='caption-button view-button'>View Site</a> 
                                <button className='x-button' onClick={this.closeModal3}> X </button>
                            </div>
                            
                                            
                        </Modal>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
  
}

export default Portfolio;
