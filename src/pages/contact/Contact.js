import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animateVariant';

import './Contact.css';

import emailjs from 'emailjs-com';

import Loading from '../../components/loading/Laoding';

import contactSchema from '../../utils/contactValidation';

import FormResponse from '../../components/formResponse/FormResponse';



function Contact() {

    const [formData, setFormData] =  useState(
        {
        name: '',
        email: '',
        reason:'',
        message: ''
    });

    const [personName, setPersonName] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const [formError, setFormError] = useState(false);
    
    const [sendAnotherMail, setSendAnotherMail] = useState(true);


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
        // const mail = await  emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID);
        await  emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID);
        setPersonName(formData.name)
        // console.log(mail);
        setIsLoading(false);
        setFormData({
            name: '',
            email: '',
            reason:'',
            message: ''
            })
            setSendAnotherMail(false)
        
    } catch (error) {  
        // console.log(error.text);
        setIsLoading(false);
    }
}

//HANDLE FORM SUBMIT
async function handleSubmit(e){
    e.preventDefault();

    const check = await formValidate();

    // console.log('from submit' + check)

    if(check){
      return  await sendEmail(e)
    }

    if(!check){
        setFormError(true)
        // console.log('I am the last one' + formError)
    }
}

//HANDLE SEND ANOTHER MAIL
function handleAnotherMessage(){
    setSendAnotherMail(true)
}



    return (
        <motion.div className="contact__container" initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}> 
            <h1>Contact Us</h1>
            <p>Have a question? Want a bulk order? Have Complains? Send us a message using the form below and we’ll get back to you as soon as we can!</p>


        <div className="contact__form-container">
            {sendAnotherMail? (
            
            <form onSubmit={handleSubmit} className="contact__form">
            {isLoading?<Loading/>:null}
                
                <div className="contact__form-first">
                    <div className="form__section">
                        <label htmlFor="name">Full name</label>
                        <input type="text" id="name" placeholder="Enter your full name" name="name" value={formData.name} onChange={handleChange}/>
                    </div>
                    <div className="form__section">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your address" name="email" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="form__section">
                        <label htmlFor="reason">Reason</label>
                        <input type="text" id="reason" placeholder="Please why are you contacting us?" name="reason" value={formData.reason} onChange={handleChange}/>
                    </div>
                </div>

                <div className="contact__form-second">
                    <div className="form__section">
                        <label htmlFor="message">Message</label>
                        <textarea type="text" id="message" placeholder="Write your messgae" name="message" value={formData.message} onChange={handleChange}/>
                    </div>
                    <button>Send message</button>
                    {formError?<h2 className='formerror'>Check your entries</h2> : null}

                </div>
            </form>
            ):null}

            {!sendAnotherMail?(
                <FormResponse name={personName} handleAnotherMessage={handleAnotherMessage} />

            ): null}
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
        </motion.div>
    )
}

export default Contact
