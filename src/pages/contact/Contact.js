import React from 'react';

import './Contact.css'

function Contact() {
    return (
        <div className="contact__container">
            <h1>Contact Us</h1>
            <p>Have a question? Want a bulk order? Have Complains? Send us a message using the form below and we’ll get back to you as soon as we can!</p>

            <div className="contact__form">
                <div className="contact__form-first">
                    <div className="form__section">
                        <label htmlFor="name">Full name</label>
                        <input type="text" id="name" placeholder="Enter your full name"/>
                    </div>
                    <div className="form__section">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your address"/>
                    </div>
                    <div className="form__section">
                        <label htmlFor="reason">Reason</label>
                        <input type="text" id="reason" placeholder="Please why are you contacting us?"/>
                    </div>
                </div>

                <div className="contact__form-second">
                    <div className="form__section">
                        <label htmlFor="message">Full name</label>
                        <textarea type="text" id="message" placeholder="Write your messgae"/>
                    </div>
                    <button>Send message</button>
                </div>
            </div>


            <div className="contact__info-container">
            <div className="contact__info">
                    <h3>Location</h3>
                    <h3>Visitation</h3>
                    <span>Anytime between <br/>9am - 4:30pm GMT +1 </span>
                </div>
                <div className="contact__info">
                    <h3>Call</h3>
                    <h3>+234 8059 2974 71</h3>
                    <span>Anytime between <br/>9am - 4:30pm GMT +1 </span>
                </div>
                <div className="contact__info">
                    <h3>Email</h3>
                    <h3>info@stovagroup.com</h3>
                    <span>Available <br/>24 hours</span>
                </div>
               
                
               
            </div>
        </div>
    )
}

export default Contact
