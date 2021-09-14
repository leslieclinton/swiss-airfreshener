import React from 'react';
import './Distributor.css';

import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animateVariant';


import {countryList} from '../../assets/data/countryData'

function Distributor() {
    return (
        <motion.div className="distributor" initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}>
            <div className="distributor__header">
                <div className="distributor__img"></div>
                <h1>Become a distributor</h1>
                <p>Have a question? Want a bulk order? Have Complains? Send us a message using the form below and we’ll get back to you as soon as we can!</p>
            </div>

            <div className="distributor__form-container">

                    <form action="" className="distibutor__form"> 
                    
                        <div className="form__section">
                            <label htmlFor="name">Full name</label>
                            <input type="text" id="name" placeholder="Enter your full name"/>
                        </div>
                        <div className="form__section">
                            <label htmlFor="address">Email Address</label>
                            <input type="email" id="name" placeholder="Enter your email address"/>
                        </div>
                        <div className="form__section">
                            <label htmlFor="name">Phone number</label>
                            <input type="text" id="number" placeholder="Enter your phone number"/>
                        </div>
                        <div className="form__section">
                            <label htmlFor="location">Location</label>
                            <select name="cars" id="location">
                            <option value="Nigeria" selected="selected">Nigeria</option>
                                {countryList.map((country, i)=>{
                                return <option key={i} value={country}>{country}</option>
                                })}
                              
                            </select>
                        </div>
                        {/* <div className="form__section">
                            <label htmlFor="business">Business name </label>
                            <input type="text" id="business" placeholder="Enter your business name if any"/>
                        </div> */}
                        
                        <div className="form__section">
                            <label htmlFor="years">Years of experience</label>
                            <select  id="years">
                                <option value="1 - 5 years">1 - 5 Years</option>
                                <option value="6 - 10 years">6 - 10 years</option>
                                <option value="11 years and above">11 years and above</option>
                            </select>
                        </div>

                        <div className="form__section form__section-full">
                            <label htmlFor="areas">Areas intended to to cover</label>
                            <input type="text" id="areas" placeholder="Enter locations here"/>
                        </div>
                    
                        <div className="btn"><button>Submit</button></div>
                    </form>
                
                
            </div>
        </motion.div>
    )
}

export default Distributor
