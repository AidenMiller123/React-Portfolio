import React from 'react';
import '../../styles/Section.css';
import logo from '../../images/github-logo.png'


export default function Portfolio() {
  return (
    <div className='section container-fluid'>
      <div className='portfolioContainers'>
        <h1 className='portfolio-title'>Portfolio</h1>
        <section className="work-content" id="work-content">
          <section className="card-prework">
            <div className='port-container'>
              <div className="text-box ">
                <a href='https://aidenmiller123.github.io/Prework-Study-Guide/' alt="Prework Study Guide" title="Prework Study Guide" target="_blank" rel="noopener noreferrer" className='title-port'>Prework Study Guide </a>
                <a className="me-4 logo-portfolio" href="https://github.com/AidenMiller123/Prework-Study-Guide" target="_blank" rel="noopener noreferrer"><img src={logo} alt='Github Logo' className='github-logo portfolio-logo'></img></a>
              </div>
              <div >
                <h4>HTML/CSS</h4>
              </div>
            </div>
          </section>
          <section className="card-password">
            <div className='port-container'>
              <div className="text-box">
                <a href='https://aidenmiller123.github.io/Password-Generator/' alt="Password Generator" title="Password Generator" target="_blank" rel="noopener noreferrer" className='title-port'>Password Generator  </a>
                <a className="me-4 logo-portfolio" href="https://github.com/AidenMiller123/Password-Generator" target="_blank" rel="noopener noreferrer"><img src={logo} alt='Github Logo' className='github-logo portfolio-logo'></img></a>
              </div>
              <div>
                <h4>HTML/CSS/JavaScript</h4>
              </div>
            </div>
          </section>
          <section className="card-pokedex">
            <div className='port-container'>
              <div className="text-box ">
                <a href="https://hteasdell44.github.io/pokedex-emulation/" alt="Pokedex" title="Pokedex" target="_blank" rel="noopener noreferrer" className='title-port'>Pokedex </a>
                <a className="me-4 logo-portfolio" href="https://github.com/Hteasdell44/pokedex-emulation" target="_blank" rel="noopener noreferrer"><img src={logo} alt='Github Logo' className='github-logo portfolio-logo'></img></a>
              </div>
              <div>
              <h4>HTML/CSS/JavaScript </h4>
              </div>
            </div>
          </section>
          <section className="card-quiz">
            <div className='port-container'>
              <div className="text-box">
                <a href="https://aidenmiller123.github.io/Coding-Quiz/" alt="Coding Quiz" title="Coding Quiz" target="_blank" rel="noopener noreferrer" className='title-port'>Coding Quiz </a>
                <a className="me-4 logo-portfolio" href="https://github.com/AidenMiller123/Coding-Quiz" target="_blank" rel="noopener noreferrer"><img src={logo} alt='Github Logo' className='github-logo portfolio-logo'></img></a>
              </div>
              <div>
                <h4> HTML/CSS/JavaScript </h4>
              </div>
            </div>
          </section>
          <section className="card-weather">
            <div className='port-container'>
              <div className="text-box">
                <a href="https://aidenmiller123.github.io/Weather-Dashboard/" alt="Weather Dashboard" title="Weather Dashboard" target="_blank" rel="noopener noreferrer" className='title-port'>Weather Dashboard </a>
                <a className="me-4 logo-portfolio" href="https://github.com/AidenMiller123/Weather-Dashboard" target="_blank" rel="noopener noreferrer"><img src={logo} alt='Github Logo' className='github-logo portfolio-logo'></img></a>
              </div>
              <div>
                <h4> HTML/CSS/JavaScript/API's</h4>
              </div>
            </div>
          </section>
          <section className="card-bloodDonation">
            <div className='port-container' >
              <div className="text-box">
                <a href="https://cryptic-depths-18999.herokuapp.com/" alt="Blood Donation" title="Blood Donation Association" target="_blank" rel="noopener noreferrer" className='title-port'>Blood Donation Association  </a>
                <a className="me-4 logo-portfolio" href="https://github.com/EbonyRFord/Blood-donation-association" target="_blank" rel="noopener noreferrer"><img src={logo} alt='Github Logo' className='github-logo portfolio-logo'></img></a>
              </div>
              <div>
                <h4>Handlebars/CSS/JavaScript/SQL</h4>
              </div>
            </div>
          </section>
          <section className="card-techBlog">
            <div className='port-container'>
              <div className="text-box">
                <a href="https://still-dawn-43335.herokuapp.com/" alt="Tech Blog" title="Tech Blog" target="_blank" rel="noopener noreferrer" className='title-port'>Tech Blog  </a>
                <a className="me-4 logo-portfolio" href="https://github.com/AidenMiller123/Tech-Blog-MVC" target="_blank" rel="noopener noreferrer"><img src={logo} alt='Github Logo' className='github-logo portfolio-logo'></img></a>
              </div>
              <div>
                <h4>Handlebars/CSS/JavaScript/MongoDb</h4>
              </div>
            </div>
          </section>
          <section className="card-workday">
            <div className='port-container' >
              <div className="text-box">
                <a href="https://aidenmiller123.github.io/Work-Day-Scheduler/" alt="Workday Scheduler" title="Workday Scheduler" target="_blank" rel="noopener noreferrer" className='title-port'>Workday Scheduler </a>
                <a className="me-4 logo-portfolio" href="https://github.com/AidenMiller123/Work-Day-Scheduler" target="_blank" rel="noopener noreferrer"><img src={logo} alt='Github Logo' className='github-logo portfolio-logo'></img></a>
              </div>
              <div>
                <h4>HTML/Javascript/CSS</h4>
              </div>
            </div>
          </section>
          <section className="card-note">
            <div className='port-container'>
              <div className="text-box">
                <a href="https://salty-plains-51556.herokuapp.com/" alt="Note Taker" title="Note Taker" target="_blank" rel="noopener noreferrer" className='title-port'>Note Taker </a>
                <a className="me-4 logo-portfolio" href="https://github.com/AidenMiller123/Note-Taker-Generator" target="_blank" rel="noopener noreferrer"><img src={logo} alt='Github Logo' className='github-logo portfolio-logo'></img></a>
              </div>
              <div>
                <h4>HTML/Javascript/CSS</h4>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
