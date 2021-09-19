import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animateVariant';

import ProductHeader from '../../components/productHeader/ProductHeader';
import './ScentPad.css';
import ProductFeatures from '../../components/productFeatures/ProductFeatures'
// import ProductPhoto from '../../components/productPhoto/ProductPhoto';

import Cta from '../../components/cta/Cta';

import ScentPadMarine from '../../assets/Images/Scentpad-marine.jpg'
import ScentPadFreshDew from '../../assets/Images/Scentpad-fresh-dew.jpg'
import ScentPadOrient from '../../assets/Images/Scentpad-orient.jpg'
import ScentPadBlossom from '../../assets/Images/Scentpad-blossom.jpg'


const ScentPadData ={
    heading:'Swiss Scent Pad Airfreshner.',
    description: 'A reliable odour repellent. It comes in  variety of fragrance keeping your environment fresh with long lasting fragrances. It comes in  variety fragrances of Vanilla, Multi Fruity, Lemon, Lavenda, Campestra, Tropicana, and Sweet Florale keeping your environment fresh with long lasting fragrances. It is a reliable odour repellent.',
    classname: 'productheader-secntpad'
}

const Productdata = [ScentPadMarine, ScentPadFreshDew, ScentPadOrient, ScentPadBlossom];


function ScentPad() {
    return (
        <motion.div initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}>
            <ProductHeader data={ScentPadData}/>
            <ProductFeatures/>
            <div className="product__photos">
            <h2>Multiple Fragrances</h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis faucibus eleifend augue id ac lectus dictum ultrices mi. </p> */}

            <div className="scent__photos-images">
            {Productdata.map((photo, i)=>{
                 return <div className="card__photo" key={i}> <img src={photo} alt="Swiss Branded images" /></div>

            })}
                   
            </div>
        </div>
        <Cta/>
        </motion.div>
        
    )
}

export default ScentPad
