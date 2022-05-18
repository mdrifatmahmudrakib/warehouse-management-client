import React from 'react';
import { FaEnvelope, FaPhone, FaLocationArrow } from 'react-icons/fa';
import './Contact.css'
const Contact = () => {
    return (

        <div className='m-4'>
            <h1 >Contact Us</h1>
            <div className='contact-us '>

                <div className='contact'>
                    <h1><FaLocationArrow></FaLocationArrow></h1>
                    <h3>Address</h3>
                    <p>Dhaka,Bangladesh</p>
                </div>
                <div className='contact'>
                    <h1><FaEnvelope></FaEnvelope></h1>
                    <h3>Email</h3>
                    <p>mdrifatmahmudrakib@gmail.com</p>
                </div>
                <div className='contact'>
                    <h1><FaPhone></FaPhone></h1>
                    <h3>Phone</h3>
                    <p>01948389446</p>
                </div>
            </div >
        </div>
    );
};

export default Contact;