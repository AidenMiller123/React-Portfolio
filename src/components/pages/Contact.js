import React from 'react';
import '../../styles/Section.css';

export default function Contact() {
    return (
        <div className='section container-fluid '>
            <div className='Containers'>
                <h1 className='pb-4'>Contact</h1>
                <form className="form  d-flex flex-column contactForm  ">
                    <div className="form-group pb-2">
                        <label htmlFor="post-title">Name: </label>
                    </div>
                    <div className="form-group pb-2">
                        <input className="form-input " type="text" id="contact-name" />
                    </div>
                    <div className="form-group pb-2 ">
                        <label htmlFor="post-title">Email address: </label>
                    </div>
                    <div className="form-group pb-2 ">
                        <input className="form-input " type="email" id="contact-email" />
                    </div>
                    <div className="form-group pb-2">
                        <label htmlFor="postContent">Message:</label>
                    </div>
                    <div className="form-group pb-2">
                        <textarea className="form-input " type="text" id="contactContent"></textarea>
                    </div>
                    <div className="form-group d-grid">
                        <button className="btn btn-block btn-info postBtn " type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
