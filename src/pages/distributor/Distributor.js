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
                            <input type="email" id="name" placeholder="Enter your address"/>
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
                        <div className="form__section">
                            <label htmlFor="name">Occupation</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className="form__section">
                            <label htmlFor="name">Qualifications</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>

                        <div className="btn"><button>Submit</button></div>
                    </form>
                
                
            </div>
        </motion.div>
    )
}

export default Distributor
