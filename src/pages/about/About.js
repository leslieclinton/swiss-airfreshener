import React from 'react';
import Cta from '../../components/cta/Cta';
import ProductPreview from '../../components/productPreview/ProductPreview';
import './About.css';

import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animateVariant';


function About() {
    return (
        <motion.div  initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}>
            <div className="about__header">
                <h1>Swiss Flower Airfreshner</h1>
                <p>A product of Stova Industries LTD. The home of quality home care products.</p>
            </div>

            <div className="about__statement-container">
                <div className="about__statement">
                    <h3>Our Mission</h3>
                    <p>To build long-term relationship with our customers in producing quality products and good customer services by pursuing business through innovation and application of advance technology.</p>
                </div>
                <div className="about__statement">
                    <h3>Our Vision</h3>
                    <p>To be a market leader in fast moving consumer products, air care products and house care products in Sub-Saharan and the world at large by producing good quality products of international standard.</p>
                </div>
            </div>

            <ProductPreview/>

            <Cta/>
        </motion.div >

    )
}

export default About
