import React from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Section.css';

export default function Contact() {
   
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_u6upefn', 'template_danaktb', e.target, 'fjIWvj9Fv5l47FnKi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();
        };
    
    return (
        <div className='section container-fluid '>
            <div className='Containers'>
                <h1 className='pb-4 contact-title'>Contact</h1>
                <form className="form  d-flex flex-column contactForm  "  onSubmit={sendEmail}>
                    <div className="form-group pb-2">
                        <label htmlFor="post-title">Name: </label>
                    </div>
                    <div className="form-group pb-2">
                        <input className="form-input " type="text" id="contact-name" name='to_name' required/>
                    </div>
                    <div className="form-group pb-2 ">
                        <label htmlFor="post-title">Email address: </label>
                    </div>
                    <div className="form-group pb-2 ">
                        <input className="form-input " type="email" id="contact-email" name='reply_to' required/>
                    </div>
                    <div className="form-group pb-2">
                        <label htmlFor="postContent">Message:</label>
                    </div>
                    <div className="form-group pb-2">
                        <textarea className="form-input " type="text" id="contactContent" name='message' required></textarea>
                    </div>
                    <div className="form-group d-grid">
                        <button className="btn btn-block btn-info postBtn " type="submit" value="Send">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        
    );
}
