import React from 'react';
import logo from '../images/github-logo.png'
import linkedin from '../images/linkedin-logo.png'

function footerLinks() {
    return (
        <nav className="footer pt-5 pb-3">
            <div className='d-flex  flex-row justify-content-center'>
            <div className="">
                <a className="me-4" href="https://github.com/AidenMiller123" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt='Github Logo' className='github-logo'></img>
                </a>
                <a className="" href="https://github.com/AidenMiller123" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt='Linkedin Logo' className='github-logo'></img>
                </a>
            </div>
            </div>
        </nav>
    )
}

export default footerLinks;