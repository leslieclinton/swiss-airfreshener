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
                <p>Simple ingredients with stellar results. Our in-house garment care line is tried-and-true</p>
            </div>

            <div className="about__statement-container">
                <div className="about__statement">
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean. Bibendum et sollicitudin nulla netus mauris blandit ut accumsan. Tortor odio odio ridiculus erat. Convallis sel, ac egestas.</p>
                </div>
                <div className="about__statement">
                    <h3>Our Vision</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean. Bibendum et sollicitudin nulla netus mauris blandit ut accumsan. Tortor odio odio ridiculus erat. Convallis sel, ac egestas.</p>
                </div>
            </div>

            <ProductPreview/>

            <Cta/>
        </motion.div >

    )
}

export default About
