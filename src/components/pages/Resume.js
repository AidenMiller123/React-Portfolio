import React from 'react';
import  '../../styles/Section.css';
import resume from '../../images/Aiden-Miller-Resume.pdf'



export default function Resume() {
  return (
    <div className='section container-fluid'>
    <div className='Containers'>
      <h1 className='resume-title'>Resume</h1>
      <section>
        <p className='resume-text'>Download my <a href={resume} download>Resume</a></p>
      </section>
      <section>
        <h3 className='front-end-title'> Front-end Proficiencies</h3>
        <ul className='front-end ms-4'>
          <li className='mb-3 mt-5'>HTML</li>
          <li className='mb-3'>CSS</li>
          <li className='mb-3'>Javascript</li>
          <li className='mb-3'>JQuery</li>
          <li className='mb-3'>Responsive Design</li>
          <li className='mb-3'>React</li>
          <li className='mb-5'>Bootstrap</li>
        </ul>
      </section>
      <section>
        <h3 className='back-end-title'> Back-end Proficiencies</h3>
        <ul className='back-end ms-4'>
          <li className='mb-3 mt-5'>APIs</li>
          <li className='mb-3'>Node</li>
          <li className='mb-3'>Express</li>
          <li className='mb-3'>MySQL, Sequelize</li>
          <li className='mb-3'>MongoDb, Mongoose</li>
          <li className='mb-3'>REST</li>
          <li>GraphQL</li>
        </ul>
      </section>
    </div>
    </div>
  );
}
