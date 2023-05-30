import React from 'react';
import '../../styles/Section.css';
import profile from '../../images/Profile-photo1.JPG';

export default function AboutMe() {
  return (
    <div className='section container-fluid'>
      <div className='d-flex flex-column Containers align-items-start pe-5'>
        <h1 className='aboutMeHeader'>About Me</h1>
        <img src={profile} alt="Avatar" className='profile'></img>
        <div className='aboutMeContent pb-5'>
          <div className='about-me-info pt-5'>
          Hello there! My name is Aiden Miller, and I am a resident of Huntersville. I recently completed a Full Stack Coding Bootcamp and I am now a certified Full Stack Developer. 
          The bootcamp was an incredibly challenging yet rewarding experience that expanded my knowledge of various programming languages, including HTML, CSS, Javascript, SQL, NoSQL, and React.
            </div>
            <div className='about-me-info'>
            Since completing the bootcamp, I've gained valuable hands-on experience in developing web applications and honed my skills in front-end and back-end development. 
            I'm excited to apply my newfound knowledge and expertise to real-world projects and contribute to the ever-evolving field of technology.
            </div>
            <div className='about-me-info'>
            Having always been passionate about technology and its impact on society, I am thrilled to be part of the tech industry. I firmly believe in the transformative 
            power of technology to solve complex problems and improve people's lives. My goal as a Full Stack Developer is to leverage my skills to create innovative and 
            user-friendly solutions that make a positive difference in the world.
            </div>
            <div className='about-me-info'>
            My interest in programming started back when I took my first computer science class in school. Since then, I've been captivated by the endless possibilities 
            that coding offers. I knew early on that I wanted to pursue a career in technology, and now, as a certified Full Stack Developer, I'm well on my way to achieving 
            that dream.
            </div>
            <div className='about-me-info'>
            When I'm not immersed in coding, I enjoy spending quality time with my friends and family. I also indulge in playing a variety of video games, which not only entertain 
            me but also provide inspiration for creativity and problem-solving. Additionally, I love reading books on technology and innovation to stay up-to-date with the latest 
            industry trends and advancements.
            </div>
            <div>
            I am filled with enthusiasm and curiosity about the future, eager to explore the vast opportunities that lie ahead in my career as a Full Stack Developer. I am confident 
            that my passion, dedication, and continuous learning will propel me to new heights in the tech industry.
            </div>
        </div>
      </div>
    </div>
  );
}
