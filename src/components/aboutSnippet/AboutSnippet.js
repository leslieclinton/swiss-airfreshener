import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import {useAnimation, motion} from 'framer-motion'

import './AboutSnippet.css'

function AboutSnippet() {
    const {ref, inView} = useInView({threshold:0.5});
    const animation = useAnimation()

    useEffect(()=>{
        console.log(inView)
        if(inView){
            animation.start({
                x:-30,
                transition:{ duration: .5}
            })
        }

        if(!inView){
            animation.start({
                x: 0 
            })
        }
    }, [animation, inView])


   
    return (
        <div className="aboutsnippet__container">
            <div className="aboutsnippet">

                <div className="aboutsnippet__content">
                    <h2>About Swiss Flower Airfreshener</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis faucibus eleifend augue id ac lectus dictum ultrices mi. Nunc tincidunt nulla tellus justo tempor nisl. Elit arcu id pulvinar lectus habitant tempor tellus, habitasse. Elementum nulla aliquet a, mauris, luctus sit leo.</p>
                    <Link to='/about'><span>See more</span></Link>
                </div>

                <motion.div ref={ref} animate={animation} className="aboutsnippet__image ">
                    <motion.div  className="aboutsnippet__animate">
                    </motion.div>
                    
                </motion.div>

            </div>
            
        </div>
    )
}

export default AboutSnippet;
