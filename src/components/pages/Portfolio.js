import React from 'react';
import '../../styles/Section.css';
import logo from '../../images/github-logo.png'


export default function Portfolio() {
  return (
    <div className='section container-fluid'>
      <div className='portfolioContainers'>
        <h1 className='portfolio-title'>Portfolio</h1>
        <section className="work-content" id="work-content">
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
          <section className="card-python">
            <div className='port-container' >
              <div className="text-box">
                <a href="https://tech-news-blog.herokuapp.com/" alt="Python Newsfeed" title="Python Newsfeed" target="_blank" rel="noopener noreferrer" className='title-port'>Tech Newsfeed </a>
                <a className="me-4 logo-portfolio" href="https://github.com/AidenMiller123/Python-Newsfeed" target="_blank" rel="noopener noreferrer"><img src={logo} alt='Github Logo' className='github-logo portfolio-logo'></img></a>
              </div>
              <div>
                <h4>Python/Flask/SQLAlchemy/PyMySQL</h4>
              </div>
            </div>
          </section>
          <section className="card-vitality">
            <div className='port-container'>
              <div className="text-box">
                <a href="https://vitality-vault.herokuapp.com/" alt="Note Taker" title="Note Taker" target="_blank" rel="noopener noreferrer" className='title-port'>Vitality Vault </a>
                <a className="me-4 logo-portfolio" href="https://github.com/csnyder94/vitality-vault" target="_blank" rel="noopener noreferrer"><img src={logo} alt='Github Logo' className='github-logo portfolio-logo'></img></a>
              </div>
              <div>
                <h4>MERN Stack</h4>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
