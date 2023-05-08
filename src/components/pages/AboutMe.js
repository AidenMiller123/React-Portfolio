import React from 'react';
import '../../styles/Section.css';
import profile from '../../images/profile-photo.JPG';

export default function AboutMe() {
  return (
    <div className='section container-fluid '>
      <div className='d-flex flex-column Containers align-items-start'>
        <h1 className='aboutMeHeader'>About Me</h1>
        <img src={profile} alt="Avatar" className='profile'></img>
        <div className='aboutMeContent'>
          <div className='pb-5 pt-5'>
            Hi there! My name is Aiden Miller, and I am a resident of Huntersville. I am currently attending a Full Stack Coding Bootcamp with the goal of becoming a certified 
            Full Stack Developer. The bootcamp has been a challenging yet rewarding experience that has allowed me to learn various programming languages including HTML, 
            CSS, Javascript, SQL, NoSQL, and React.
            </div>
            <div className='pb-5'>
            Although I am fairly new to the tech industry, I am enthusiastic about the endless possibilities it presents. I am a firm believer 
            in the power of technology to solve complex problems and improve people's lives.
            </div>
            <div className='pb-5 '>
            I graduated from high school in 2019, and I have always been passionate about technology and its impact on society. 
            My interest in programming started when I was in school and took my first computer science class. From then on, I 
            knew I wanted to pursue a career in technology.
            </div>
            <div>
            When I am not coding, I enjoy spending time with my friends and family, playing a variety of video games, and reading books 
            on technology and innovation. I am excited about the future and can't wait to see where my career in tech takes me.
            </div>
        </div>
      </div>
    </div>
  );
}
