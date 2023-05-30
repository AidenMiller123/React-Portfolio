import React from 'react';
import logo from '../images/github-logo.png'
import linkedin from '../images/linkedin-logo.png'
import twitter from '../images/twitter-logo.png'
import email from '../images/email-logo.png'

function footerLinks() {
    return (
        <nav className="footer pt-5 pb-3">
            <div className='d-flex  flex-row justify-content-center'>
                <div className="">
                    <a className="me-4" href="https://github.com/AidenMiller123" target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt='Github Logo' className='github-logo footer-logo'></img>
                    </a>
                    <a className="ms-4" href="https://www.linkedin.com/in/aidenmiller1676/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt='Linkedin Logo' className='github-logo footer-logo'></img>
                    </a>
                    <a className="ms-4" href="https://twitter.com/AidenMiller321" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt='twitter Logo' className='github-logo  twitter-logo'></img>
                    </a>
                    <a className="ms-4" href={'mailto:Millerboy1676@gmail.com'} target="_blank" rel="noopener noreferrer">
                        <img src={email} alt='Email Logo' className='github-logo  email-logo'></img>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default footerLinks;