import React, {useState} from 'react';
import './Distributor.css';

import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animateVariant';
import {countryList} from '../../assets/data/countryData'


import emailjs from 'emailjs-com';
// import Laoding from '../loading/Laoding';

import Loading from '../../components/loading/Laoding';

import contactSchema from '../../utils/formValidation';

import FormResponse from '../../components/formResponse/FormResponse';



function Distributor() {

    const [formData, setFormData] =  useState(
        {
        name: '',
        email: '',
        location:'Nigeria',
        phone: '',
        years: '',
        areas:''
    })

    const [personName, setPersonName] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const [formError, setFormError] = useState(false)
    
    const [sendAnotherMail, setSendAnotherMail] = useState(true)



   //HANDLE FORM CHANGE
   function handleChange(e){
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}


//FORM VALIDATION
async function formValidate(){
   const check = await contactSchema.isValid({...formData})
//    console.log('heloo from check' + check)
   
   if(check){
       setFormError(false)
    }else if(!check){
        setFormError(true)
    }

    return check
 }

//SEND EMAIL
async function sendEmail(e) {
        setIsLoading(true);
        try {
            const mail = await  emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID);
            setPersonName(formData.name)
            setIsLoading(false);
            setFormData({
                    name: '',
                    email: '',
                    location:'Nigeria',
                    phone: '',
                    years: '',
                    areas:''
                })
                setSendAnotherMail(false)
            
        } catch (error) {
            setIsLoading(false);
        }
}

//HANDLE FORM SUBMIT
async function handleSubmit(e){
    e.preventDefault();

    const check = await formValidate();


    if(check){
      return  await sendEmail(e)
    }

    if(!check){
        setFormError(true)
    }
}

//HANDLE SEND ANOTHER MAIL
function handleAnotherMessage(){
    setSendAnotherMail(true)
}


    return (
        <motion.div className="distributor" initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}>
            <div className="distributor__header">
                <div className="distributor__img"></div>
                <h1>Become a distributor</h1>
                <p>We are looking for experienced result drivien distributors who are capable of actively distributing our products globally. If interested, fill and submit the form below.</p>
            </div>

            <div className="distributor__form-container">
           

            {sendAnotherMail? (
                 <form onSubmit={handleSubmit} className="distibutor__form"> 
                  {isLoading?<Loading/>:null}
                    
                    <div className="form__section">
                        <label htmlFor="name">Full name</label>
                        <input type="text" id="name" placeholder="Enter your full name" name="name" value={formData.name} onChange={handleChange}/>
                    </div>
                    <div className="form__section">
                        <label htmlFor="address">Email Address</label>
                        <input type="email" id="name" placeholder="Enter your email address" name="email" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="form__section">
                        <label htmlFor="name">Phone number</label>
                        <input type="text" id="number" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange}/>
                    </div>
                    <div className="form__section">
                        <label htmlFor="location">Location</label>
                        <select id="location" name="location" value={formData.location} onChange={handleChange}>
                        <option value="Nigeria" selected="selected">Nigeria</option>
                            {countryList.map((country, i)=>{
                            return <option key={i} value={country}>{country}</option>
                            })}
                          
                        </select>
                    </div>
                    
                    <div className="form__section">
                        <label htmlFor="years">Years of experience</label>
                        <select  id="years" name="years" value={formData.years} onChange={handleChange}>
                            <option value="--">--</option>
                            <option value="1 - 2 years">1 - 2 Years</option>
                            <option value="3 - 5 years">3 - 5 Years</option>
                            <option value="6 - 10 years">6 - 10 years</option>
                            <option value="11 years and above">11 years and above</option>
                        </select>
                    </div>

                    <div className="form__section form__section-full">
                        <label htmlFor="areas">Area intended to cover</label>
                        <input type="text" id="areas" placeholder="Enter locations here" name="areas" value={formData.areas} onChange={handleChange}/>
                    </div>
                            {formError?<h2 className='formerror'>Check your entries</h2> : null}

                    <div className="btn"><button>Submit</button></div>
                </form>):null}



                    {!sendAnotherMail?(
                <FormResponse name={personName} handleAnotherMessage={handleAnotherMessage} />

            ): null}
            
            </div>
        </motion.div>
    )
}

export default Distributor
